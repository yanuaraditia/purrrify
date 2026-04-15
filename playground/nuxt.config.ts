export default defineNuxtConfig({
  modules: ["purrify"],
  devtools: { enabled: true },
  compatibilityDate: "latest",
  dompurify: {
    profiles: {
      headingsOnly: {
        ALLOWED_TAGS: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
});
