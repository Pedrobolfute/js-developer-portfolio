function updateProfileInfo(profileData){
  const profilePhoto = document.querySelector('.header img')
  profilePhoto.src = profileData.photo
  profilePhoto.alt = profileData.name

  const profileName = document.querySelector('.profileName')
  profileName.textContent = profileData.name

  const profileJob = document.querySelector('.job')
  profileJob.textContent = profileData.title

  const profileLocation = document.querySelector('.location')
  profileLocation.textContent = profileData.place

  const profilePhone = document.querySelector('.myPhone')
  profilePhone.textContent = profileData.phone
  profilePhone.href = `tel:${profileData.phone}`

  const profileEmail = document.querySelector('.myEmail')
  profileEmail.textContent = profileData.mail
  profileEmail.href = `mailto: ${profileData.mail}`
}

function updateProfileSkills(profileData){
  const profileHardSkills = document.querySelector('.tools ul')
  profileHardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>`
  <li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>
  `).join('')

  const profileSoftSkills = document.querySelector('.personal ul')
  profileSoftSkills.innerHTML = profileData.skills.softSkills.map(skill =>`
  <li>${skill}</li>`).join('')
}

function updateProfileLanguage(profileData){
  const profileLanguage = document.querySelector('.languages')
  profileLanguage.innerHTML = profileData.languages.map(language => `
  <li>${language.name} (${language.level})</li>`).join('')
}

function updateProfilePortfolio(profileData){
  const profilePortfolio = document.querySelector('.portfolio')
  profilePortfolio.innerHTML = profileData.portfolio.map(function(data){
   return `<li>
    <h3 class="title ${data.site === 'GitHub' ? 'github' : ''}">${data.name}</h3>
    <a href="${data.src}" target="_blank">${data.src}</a>
    </li>`}).join('')
}

function updateProfileXp(profileData){
  const profileXp = document.querySelector('.experience')

  profileXp.innerHTML = profileData.experiences.map(xp => `
  
  <li>
  <h3 class="title">${xp.name}</h3>
  <p class="period">${xp.period.start}-${xp.period.end}</p>
  <p>
    ${xp.description} 
  </p>
</li>
  
  `).join('')
}

function updateProfileXpAcademic(profileData){
  const profileXp = document.querySelector('.academic')

  profileXp.innerHTML = profileData.education.map(xp => `
  
  <li>
  <h3 class="title">${xp.name}</h3>
  <p>${xp.institute}</p>
  <p class="period">${xp.period.start}-${xp.period.end}</p>
  <p>
    ${xp.description} 
  </p>
</li>
  
  `).join('')
}

(async () => {
  const profileData = await requestJsonInfo()
  console.log(profileData)

  updateProfileInfo(profileData)
  updateProfileSkills(profileData)
  updateProfileLanguage(profileData)
  updateProfilePortfolio(profileData)
  updateProfileXp(profileData)
  updateProfileXpAcademic(profileData)

})()