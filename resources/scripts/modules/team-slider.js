import { Swiper, Navigation } from 'swiper'

Swiper.use([Navigation])

new Swiper('.team-slider .swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.team-slider__next',
    prevEl: '.team-slider__previous'
  },
  breakpoints: {
    550: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 4
    }
  }
})
