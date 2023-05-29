async function requestJsonInfo(){
  const url = 'https://raw.githubusercontent.com/Pedrobolfute/js-developer-portfolio/pedro/data/profile.json'
  const responseInfo = await fetch(url)
  return responseInfo.json()
}