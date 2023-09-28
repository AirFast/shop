// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  app: {
    head: {
      style: [{ children: "html, body, #__nuxt { height: 100% }" }],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
