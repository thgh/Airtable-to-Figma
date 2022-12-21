const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const url =
    req.query.url || 'https://airtable.com/shrlFq2jSymesUYW3/tblfPZxMSWxyUUpUY'
  if (!url) {
    return res.send('url param required')
  }
  if (!url.includes('airtable.com') || !url.includes('/shr')) {
    return res.send('invalid url')
  }
  try {
    return res.json(await scrapeURL(url))
  } catch (e) {
    console.error(e)
  }
  return res.json({ no: 'pe' })
}

const regex = /\\u([\d\w]{4})/gi;
async function scrapeURL(url) {
  // Get the HTML page
  const html = await fetch(url, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en",
    "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  }).then(r => r.text())

  // Sanity check the prefetch URL
  const start = `\\u002Fv0.3\\u002Fview\\u002F`
  let optoins = html
    .split(start)
    .map((url) => url.split('"')[0])
    .filter(
      (url) =>
        url.startsWith('viw')
    )
  console.log('options', optoins)
  if (!optoins.length) {
    return {html}
  }

  // Parse the prefetch URL
  const url2 = html
    .split(start)
    .map((url) => url.split('"')[0])
    .filter(
      (url) =>
        url.startsWith('viw') && url.includes('readSharedViewData?stringifi')
    )
    .map((url) => 'https://airtable.com' + (start + url).replaceAll('\\u002F', '/'))
    .pop()

  // Get the applicationId from that URL
  console.log('url2', url2)
  const policy = JSON.parse(new URL(url2).searchParams.get('accessPolicy'))
    
  let data = await fetch(url2,
    {
      credentials: 'include',
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language':
          'en,en-GB;q=0.9,nl;q=0.8,fr;q=0.7,af;q=0.6,la;q=0.5,de;q=0.4,mt;q=0.3',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-airtable-application-id': policy.applicationId,
        'x-requested-with': 'XMLHttpRequest',
        'x-time-zone': 'Europe/Brussels',
        'x-user-locale': 'en',
      },
      referrerPolicy: 'no-referrer',
      body: null,
      method: 'GET',
      mode: 'cors',
    }
  ).then(r => r.json())
  
  if (data.data) data = data.data
  if (data.table) data = data.table
  
  console.log('data', data)
  return data
}

function serialize(obj) {
  const str = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}
