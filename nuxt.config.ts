// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'motion-v/nuxt'
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-11-08',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
