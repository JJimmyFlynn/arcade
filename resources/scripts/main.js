import '../styles/main.scss'

import './modules/header.js'
import './modules/images.js'
import './modules/scroll-animations.js'
import './modules/team-slider.js'

const elMenuToggle = document.querySelector('.js-menu-toggle')

elMenuToggle.addEventListener('click', function (e) {
  const navState = document.body.dataset.navState
  e.preventDefault()

  if (navState === 'closed') {
    document.body.dataset.navState = 'open'
    this.setAttribute('aria-label', 'Close Menu')
    return
  }

  document.body.dataset.navState = 'closed'
  this.setAttribute('aria-label', 'Open Menu')
})

if (module.hot) {
  module.hot.accept()
}
