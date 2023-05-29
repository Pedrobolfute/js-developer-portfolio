async function requestJsonInfo(){
  const url = 'https://raw.githubusercontent.com/Pedrobolfute/js-developer-portfolio/main/data/profile.json'
  const responseInfo = await fetch(url)
  return responseInfo.json()
}