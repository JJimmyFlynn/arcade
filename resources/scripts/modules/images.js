import 'lazysizes'

const images = [...document.querySelectorAll('.image')]

images.forEach((image) => {
  image.addEventListener('lazyloaded', function () {
    this.classList.add('loaded')
  })
})
