export default {
  globalName: 'chz',
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  },
  components: true,
  buildModules: ['@nuxtjs/tailwindcss','nuxt-font-loader'],
  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700&display=swap',
    // Enable options
    prefetch: true,
    preconnect: true
  }
}
