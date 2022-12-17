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
      "accept-language": "en,en-GB;q=0.9,nl;q=0.8,fr;q=0.7,de;q=0.6",
      "cache-control": "max-age=0",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "cross-site",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": "brw=brwilfffG2UHuENbd; login-status-p=1; phg=0; __Host-airtable-session=eyJzZXNzaW9uSWQiOiJzZXMybzYyQWZabHdtWU1ZTiIsImNzcmZTZWNyZXQiOiI1WUF4amdwVEEtSl9JYm5aR0ZDeWtaS04iLCJoaWdoU2VjdXJpdHlNb2RlRW5hYmxlZFRpbWUiOjE2NDIyMzMwMTk2NDYsInVzZXJJZCI6InVzclRvWFMyaTRyQU1HanN6In0=; __Host-airtable-session.sig=4lAmjSJyLEUHMzO9e8LDKBMOZ5m5tPlkOSLi46HZowY; __zlcmid=183kdF5PEmXLhcR; acq=eyJhY3F1aXNpdGlvbiI6Ilt7XCJwbGF0Zm9ybVwiOlwiZGVza3RvcFwiLFwib3JpZ2luXCI6XCJ0ZW1wbGF0ZXNcIixcInRvdWNoVGltZVwiOlwiMjAyMi0wMS0xN1QxOTowNjo1MC41OThaXCJ9LHtcInJlZmVycmVyXCI6XCJodHRwczovL3d3dy5haXJ0YWJsZS5jb20vdGVtcGxhdGVzL3NlYXJjaD9xPWNtc1wiLFwicGxhdGZvcm1cIjpcImRlc2t0b3BcIixcIm9yaWdpblwiOlwidGVtcGxhdGVzXCIsXCJ0b3VjaFRpbWVcIjpcIjIwMjItMDEtMTdUMTk6MDY6NTguMzUxWlwifSx7XCJyZWZlcnJlclwiOlwiaHR0cHM6Ly93d3cuYWlydGFibGUuY29tL3RlbXBsYXRlcy9zZWFyY2g/cT1ibG9nXCIsXCJwbGF0Zm9ybVwiOlwiZGVza3RvcFwiLFwib3JpZ2luXCI6XCJ0ZW1wbGF0ZXNcIixcInRvdWNoVGltZVwiOlwiMjAyMi0wMS0xN1QxOTowNzowNy4zMzFaXCJ9XSJ9; acq.sig=UL1-Qq5Poys-wK1tTUt8G6SodWRNi4EUbVRKOxwdHeE; OptanonAlertBoxClosed=2022-09-21T10:25:45.274Z; AWSELB=F5E9CFCB0C87D62DB5D03914FDC2A2D2D45FBECE92E41FD16876642C9D3ADA1D9D322729E391AC3560650744EDFEAB3519A6F71FB939DC7DD5E5BB5CC26120ACFC19E931DC; AWSELBCORS=F5E9CFCB0C87D62DB5D03914FDC2A2D2D45FBECE92E41FD16876642C9D3ADA1D9D322729E391AC3560650744EDFEAB3519A6F71FB939DC7DD5E5BB5CC26120ACFC19E931DC; OptanonConsent=isIABGlobal=false&datestamp=Thu+Nov+10+2022+01%3A52%3A50+GMT%2B0100+(Central+European+Standard+Time)&version=6.7.0&hosts=&consentId=2e19c05d-36ca-4eda-be07-884d969f4108&interactionCount=2&landingPath=NotLandingPage&groups=C0004%3A0%2CC0001%3A1%2CC0003%3A0%2CC0002%3A0&AwaitingReconsent=false&geolocation=BE%3BVLG; localePref=auto; AWSALB=ve1rCCo2jP78tB77rxzNLcYxaApfOPT6RN0xwQHm+jSeCLTd2fUixiHwumFul25zdes329fn7xTjYmX5qHhMOcM9GEtGlw9KNIBFAyAUCtMYgXdhKSLM2wIsS8Km; AWSALBCORS=ve1rCCo2jP78tB77rxzNLcYxaApfOPT6RN0xwQHm+jSeCLTd2fUixiHwumFul25zdes329fn7xTjYmX5qHhMOcM9GEtGlw9KNIBFAyAUCtMYgXdhKSLM2wIsS8Km; mbpg=2023-12-17T12:55:52.674ZusrToXS2i4rAMGjszfree; mbpg.sig=evSA7WtG_JkQP43HWGe2tADvN5HBy5OAdoZWTpL0-ac",
      "Referer": "https://github.dev/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
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
