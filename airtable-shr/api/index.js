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
  const html = await fetch(url).then(r => r.text())

  // Parse the prefetch URL

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
    
  const data = await fetch(url2,
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
