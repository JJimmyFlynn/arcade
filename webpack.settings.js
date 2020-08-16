module.exports = {
  name: 'Arcade Theatres',
  paths: {
    src: {
      base: './resources/',
      js: './resources/scripts/',
      css: './resources/styles/',
      images: './resources/assets/images/'
    },
    dist: {
      base: './web/dist/',
      images: './assets/images'
    }
  },
  entries: {
    main: 'main.js'
  },
  urls: {
    live: 'https://example.com/',
    local: 'http://example.test/',
    critical: 'http://example.test/',
    publicPath: () => process.env.PUBLIC_PATH || '/dist/'
  }
}
