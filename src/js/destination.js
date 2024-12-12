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
    destino.classList.add('active')
    destinationList.forEach((otroDestino) => {
      if (destino != otroDestino) {
        otroDestino.classList.remove('active')
      }})
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
