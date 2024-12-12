document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger')
  const nav = document.querySelector('.header__listmovil')
  const menu = document.querySelector('.header__menu')

  let isOpen = false

  hamburger.addEventListener('click', () => {
    isOpen = !isOpen
    updateHamburgerIcon()
    if (isOpen) {
      document.querySelector('.header__listmovil').style.display = 'flex'
    }
    else {
      document.querySelector('.header__listmovil').style.display = 'none'
    }
    console.log(nav.className)

  })

  function updateHamburgerIcon() {
    if (isOpen == true) {
      hamburger.style.backgroundImage = "url('/assets/shared/icon-close.svg')"
    } else {
      hamburger.style.backgroundImage = "url('/assets/shared/icon-hamburger.svg')"
    }
  }
  if (nav || menu) {
    window.addEventListener('click', (e) => {
      if (!e.target.classList.contains('header__listmovil')) {
        nav.classList.remove('active')
        updateHamburgerIcon()
      }
    })
  }
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

const currentPage = window.location.pathname
const headerOptions = document.querySelectorAll('.nav__option')

 headerOptions.forEach((option) => {
    const optionPage = option.dataset.page
    if ((currentPage === '/' && optionPage === 'home') || currentPage.includes(optionPage)) {
      option.classList.add('active')
      option.style.setProperty('--before-width', '100%')
    } else {
      option.classList.remove('active')
      option.style.setProperty('--before-width', '0')

    }
  })