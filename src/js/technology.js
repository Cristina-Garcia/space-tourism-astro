import { data } from '../data/data.js'

const datos = data.technology

const btns = document.querySelectorAll('.pagination__btnBig')
const nameLaunch = document.querySelector('.infoLaunch__name')
const p = document.querySelector('.infoLaunch__description')
const img = document.querySelector('.img__launch')

const imgD = '/assets/technology/image-launch-vehicle-landscape.jpg'
const imgM = '/assets/technology/image-launch-vehicle-portrait.jpg'

// window.addEventListener('load, resize', function (event) {
//   const widthWv = window.innerWidth
//   const urlImg = widthWv <= 820 ? imgD : imgM
//   img.setAttribute('src', `${urlImg}`)
// })

window.addEventListener('load', function (event) {
  actualizarImagen() // Llamamos a la función para actualizar la imagen cuando la ventana se carga por primera vez
})

window.addEventListener('resize', function (event) {
  actualizarImagen() // Llamamos a la función para actualizar la imagen cada vez que la ventana cambia de tamaño
})

function actualizarImagen() {
  const widthWv = window.innerWidth
  const urlImg = widthWv <= 820 ? imgD : imgM // Asegúrate de que imgD e imgM estén definidos previamente

  img.setAttribute('src', `${urlImg}`)
}

// result = condition1 ? value1 : condition2 ? value2 : defaultValue

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name
    const currentLaunch = datos.find((obj) => {
      return obj.name == name
    })
    const imgL = currentLaunch.images
    const widthWv = window.innerWidth

    const urlImg = widthWv >= 820 ? imgL.portrait : imgL.landscape
    img.setAttribute('src', `${urlImg}`)
    nameLaunch.textContent = currentLaunch.name.toUpperCase()
    p.textContent = currentLaunch.description
  })
})
