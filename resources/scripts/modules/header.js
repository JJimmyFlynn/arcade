// Track if this is the 1st time the observer runs
let isHeaderInitialized = false
const elHeaderTracker = document.querySelector('.js-header-tracker')

const headerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      const elLogoContainer = document.querySelector('.js-logo-container')
      elLogoContainer.removeAttribute('hidden')

      // Only execute this on the initial observer run
      if (!isHeaderInitialized) {
        isHeaderInitialized = true

        // Header is at the top of the page, enable the animation
        if (entry.intersectionRatio > 0) {
          elLogoContainer.classList.add('enable-animation')
        }
      }

      // Show when page scroll is at top
      if (entry.isIntersecting) {
        elLogoContainer.classList.remove('hide')
        return
      }

      // Hide when the page is scrolled
      elLogoContainer.classList.add('hide')
    })
  },
  {
    threshold: 1
  }
)

// Go, go, gadget observe
headerObserver.observe(elHeaderTracker)
