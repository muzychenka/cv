import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    },

    dir: {
        pages: './routes',
        layouts: './layouts'
    },

    srcDir: './src/app',

    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                    sizes: 'any'
                }
            ],
            meta: [
                {
                    name: 'keywords',
                    content:
                        'Frontend Developer, TypeScript Developer, JavaScript Developer, Vue.js Developer, Nuxt.js Developer, SolidJS Developer, Web Development, SPA Development, Modern Frontend, Responsive Web Apps, Dzmitry Muzychenka'
                }
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=' + process.env.GTM
                },
                {
                    innerHTML: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.GTM}');`
                }
            ]
        }
    },

    imports: {
        scan: false
    },

    css: ['@/shared/assets/scss/main.scss'],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                      @use '@/shared/assets/scss/fonts.scss' as *;
                      @use '@/shared/assets/scss/variables.scss' as *;
                      @use '@/shared/assets/scss/screens.scss' as *;
                  `
                }
            }
        }
    },

    modules: ['@vueuse/nuxt', '@nuxtjs/eslint-module', '@nuxtjs/i18n'],

    i18n: {
        compilation: {
            strictMessage: false
        },
        restructureDir: 'src/app/i18n',
        locales: [
            { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
            { code: 'be', name: 'Belarusian', language: 'be-BY', file: 'be.json' }
        ],
        defaultLocale: 'en'
    },

    compatibilityDate: '2025-07-15'
})
