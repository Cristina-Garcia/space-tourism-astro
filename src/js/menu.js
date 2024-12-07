const hamburger = document.querySelector('.header__hamburger')
const nav = document.querySelector('.header__listmovil')
const menu = document.querySelector('.header__menu')

let isOpen = false
// hamburber.addEventListener('click', () => {
//   isOpen = !isOpen
//   // hamburber.style.backgroundImage = "url('/assets/shared/icon-close.svg')"
//   // hamburber.setAttribute('src', '/assets/shared/icon-close.svg')
//   nav.classList.toggle('active')
//   menu.classList.toggle('active')
//   if (isOpen) {
//     hamburber.style.backgroundImage = "url('/assets/shared/icon-close.svg')"
//   } else {
//     hamburber.style.backgroundImage = "url('/assets/shared/icon-open.svg')" //
//   }
// })

hamburger.addEventListener('click', () => {
  isOpen = !isOpen
  nav.classList.toggle('active')
  menu.classList.toggle('active')
  updateHamburgerIcon()
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
      console.log('jj')
      nav.classList.remove('active')
      menu.classList.remove('active')
      updateHamburgerIcon()
    }
  })
}
