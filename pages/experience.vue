<template>
    <div class="experience">
        <h1
            id="title"
            class="experience__title page-title"
        >
            &#8203;
        </h1>
        <div class="article-wrapper">
            <h2
                id="website-1"
                class="article-wrapper__title title"
            >
                Summary
            </h2>
            <article class="experience__article">
                I have built and maintained complex web platforms, e-commerce solutions,
                cross-platform mobile applications, and real-time systems.<br />
                My expertise spans across modern frameworks and technologies including Vue (Vue 2/3,
                Vuex, Pinia, Nuxt 2/3), React (Redux, Next.js), TypeScript, Node.js, PHP, Magento,
                Strapi, MySQL, Docker, WebSockets, and payment gateway integrations.<br /><br />
                Key highlights of my work include:<br />
                <ul>
                    <li>
                        Engineering real-time applications with WebSocket integrations, live data
                        streaming, and secure workflows for sensitive document handling.
                    </li>
                    <li>
                        Creating custom web tools such as a web-based image editor (Canvas, SVG) for
                        product personalization.
                    </li>
                    <li>
                        Designing and implementing admin dashboards and PWAs for fleet and booking
                        management.
                    </li>
                    <li>
                        Developing large-scale e-commerce platforms (Magento, custom frontends) with
                        multi-store setups, international payment integrations, and optimized SEO.
                    </li>
                    <li>
                        Building cross-platform mobile apps with Ionic, supporting offline mode,
                        background sync, and real-time fleet tracking.
                    </li>
                    <li>
                        Delivering SEO-optimized corporate websites with CMS integrations for
                        scalable content management.
                    </li>
                    <li>
                        Mentoring developers, conducting code reviews, teaching frontend
                        technologies, and supporting CI/CD pipelines.
                    </li>
                </ul>
                I work confidently across the entire project lifecycle — from architecture and
                development to deployment and performance optimization — while maintaining strong
                communication with stakeholders.
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EXPERIENCE_TITLES } from '@/constants/experience'

useHead({
    title: 'Experience'
})

onMounted(() => {
    parseText(document.getElementById('title'), 'EXPERIENCE')
    for (const [index, title] of EXPERIENCE_TITLES.entries()) {
        parseText(document.getElementById(`website-${index + 1}`), title)
    }
})
</script>

<style lang="scss">
.experience {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;

    @include desktop {
        padding: 4rem 11rem 7rem 11rem;
        margin-top: 6.5rem;
    }

    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }

    .article-wrapper {
        display: flex;
        flex-direction: column;

        .article {
            &__link {
                color: $blue;
                text-shadow: 0 0 20px $blue;
                text-decoration: none;
            }
        }

        &__title {
            font-size: 1.5rem;
            letter-spacing: 2px;
            color: white;
            align-self: flex-start;
            padding: 1rem 2rem;
            border: 2px solid $blue;
        }
    }
}
</style>
