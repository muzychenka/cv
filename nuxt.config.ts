import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
      head: {
          link: [
              {
                  rel: 'icon',
                  href: '/favicon.ico',
                  sizes: 'any'
              }
          ]
      }
  },

  imports: {
      dirs: ['stores']
  },

  css: ['@/assets/scss/main.scss'],

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `
                      @use '@/assets/scss/variables.scss' as *;
                      @use '@/assets/scss/screens.scss' as *;
                  `
              }
          }
      },
      plugins: [svgLoader()]
  },

  modules: ['@vueuse/nuxt', '@nuxtjs/eslint-module'],
  compatibilityDate: '2025-04-05'
})