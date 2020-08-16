import '../styles/main.scss'

import 'lazysizes'

const images = [...document.querySelectorAll('.image')]

images.forEach((image) => {
  image.addEventListener('lazyloaded', function () {
    this.classList.add('loaded')
  })
})

const jsAnimatedObserver = new IntersectionObserver(
  (entries, observer) => {
    console.log('Entries:', entries)
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
      }
    })
  },
  {
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  }
)

const jsAnimated = document.querySelectorAll('.js-animate')

jsAnimated.forEach((element) => {
  jsAnimatedObserver.observe(element)
})
