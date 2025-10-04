import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    },

    dir: {
        pages: './src/app/routes',
        layouts: './src/app/layouts'
    },

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
        },
        plugins: [svgLoader()]
    },

    modules: ['@vueuse/nuxt', '@nuxtjs/eslint-module'],
    compatibilityDate: '2025-04-05'
})
