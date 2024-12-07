import { data } from '../data/data.js'

const datos = data.crew

const botons = document.querySelectorAll('.pagination__btn')
const role = document.querySelector('.crew__role')
const nameCrew = document.querySelector('.crew__name')
const bio = document.querySelector('.crew__description')
const imgCrew = document.querySelector('#imgCrew')

botons.forEach((element) => {
  element.addEventListener('click', () => {
    const name = element.dataset.name
    const currentCrew = datos.find((obj) => {
      return obj.name == name
    })

    imgCrew.setAttribute('src', `${currentCrew.images.png}`)
    role.innerHTML = currentCrew.role.toUpperCase()
    nameCrew.innerHTML = currentCrew.name.toUpperCase()
    bio.innerHTML = currentCrew.bio
  })
})
