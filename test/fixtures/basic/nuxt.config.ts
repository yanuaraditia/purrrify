import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [MyModule],
  dompurify: {
    profiles: {
      headingsOnly: {
        allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      },
      plainText: {
        allowedTags: [],
        allowedAttributes: {}
      }
    }
  }
})
