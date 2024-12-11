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
