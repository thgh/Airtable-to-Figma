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

  const html = await fetch(url, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en,en-GB;q=0.9,nl;q=0.8,fr;q=0.7,de;q=0.6",
    "cache-control": "max-age=10",
    "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
  },
}).then(r => r.text())
  let js = html.split('window.initData =')[1]?.split('</script>')[0] || ''
  return {html:html.length,len:js.length,js}
  if (js.endsWith(';')) js = js.slice(0, -1)

  js=atob(btoa(js))
  
  const config=JSON.parse(js)

  console.log('pol', config.accessPolicy)
  const policy = JSON.parse(config.accessPolicy)
  console.log('policy', policy)
  return getTableData(
    config.sharedViewId,
    policy.applicationId,
    config.accessPolicy
  )
}

async function getTableData(viewId, applicationId, accessPolicy) {
  console.log(
    'vie',
    'https://airtable.com/v0.3/view/' +
      viewId +
      '/readSharedViewData?' +
      serialize({
        stringifiedObjectParams: {},
        requestId: 'reqrdddddwj83Mdd',
        accessPolicy: accessPolicy,
      })
  )
  const data = await fetch(
    'https://airtable.com/v0.3/view/' +
      viewId +
      '/readSharedViewData?' +
      serialize({
        stringifiedObjectParams: {},
        requestId: 'reqrdddddwj83Mdd',
        accessPolicy: accessPolicy,
      }),
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
        'x-airtable-application-id': applicationId,
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
