import '../styles/main.scss'

import './modules/header.js'
import './modules/images.js'
import './modules/scroll-animations.js'
import './modules/team-slider.js'

const elMenuToggle = document.querySelector('.js-menu-toggle')

elMenuToggle.addEventListener('click', (e) => {
  const navState = document.body.dataset.navState
  e.preventDefault()

  if (navState === 'closed') {
    document.body.dataset.navState = 'open'
    return
  }

  document.body.dataset.navState = 'closed'
})
