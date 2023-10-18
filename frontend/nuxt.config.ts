// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        file: "en.ts",
      },
      {
        code: "uk",
        iso: "uk",
        dir: "ltr",
        file: "uk.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});
