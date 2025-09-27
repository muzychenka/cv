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
            ],
            meta: [
                {
                    name: 'description',
                    content:
                        'Frontend Developer specializing in TypeScript, JavaScript, Vue, Nuxt, and SolidJS. Building modern, performant web applications with clean code and best practices.'
                },
                {
                    name: 'keywords',
                    content:
                        'Frontend Developer, TypeScript Developer, JavaScript Developer, Vue.js Developer, Nuxt.js Developer, SolidJS Developer, Web Development, SPA Development, Modern Frontend, Responsive Web Apps, Dzmitry Muzychenka'
                }
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-P09V7YZ6C5'
                },
                {
                    innerHTML: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-P09V7YZ6C5');`
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
