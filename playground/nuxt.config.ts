export default defineNuxtConfig({
  modules: ['purrrify'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  purrrify: {
    profiles: {
      headingsOnly: {
        allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      }
    }
  }
})
