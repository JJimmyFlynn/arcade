const jsAnimatedObserver = new IntersectionObserver(
  (entries, observer) => {
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
