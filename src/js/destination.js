import { data } from '../data/data.js'

const destinos = data.destinations
const destinationList = document.querySelectorAll('.destination__option')
const img = document.querySelector('#imgPlanet')
const nameDestino = document.querySelector('#destino')
const description = document.querySelector('#description')
const avgDistance = document.querySelector('#avgDistance')
const travelTime = document.querySelector('#travelTime')

destinationList.forEach((destino) => {
  destino.addEventListener('click', () => {
    const name = destino.dataset
    const selectedDestination = destinos.find((item) => {
      return item.name == name.name
    })

    img.setAttribute('src', `${selectedDestination.images.png}`)
    nameDestino.innerHTML = selectedDestination.name
    description.innerHTML = selectedDestination.description
    avgDistance.textContent = selectedDestination.distance
    travelTime.textContent = selectedDestination.travel
  })
})

const classScreenHeight = [
  '.space__content',

]
function screenMin(arrayClasses) {
  arrayClasses.forEach((domElement) => {
    // se valida que el elemento exista para evitar errores con el Dom
    if (document.querySelector(domElement)) {
      let domItem = document.querySelector(domElement)
      domItem.style.minHeight = window.innerHeight + 'px'
    }
  })

  window.addEventListener('resize', () => {
    arrayClasses.forEach((domElement) => {
      // se valida que el elemento exista para evitar errores con el Dom
      if (document.querySelector(domElement)) {
        let domItem = document.querySelector(domElement)
        domItem.style.minHeight = window.innerHeight + 'px'
      }
    })
  })
}
screenMin(classScreenHeight)