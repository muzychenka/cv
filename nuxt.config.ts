import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    href: 'favicon.ico',
                    sizes: 'any'
                }
            ]
        }
    },
    imports: {
        dirs: ['stores']
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `
                        @import '@/assets/scss/variables.scss';
                        @import '@/assets/scss/screens.scss';
                    `
                }
            }
        },
        plugins: [
            svgLoader()
        ]
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/eslint-module'
    ]
})
