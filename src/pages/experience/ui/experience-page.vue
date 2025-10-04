<script setup lang="ts">
import { ArticleBlock, PageTitle, ArticleTitle } from '@/shared/ui'

useHead({
    title: 'Experience',
    meta: [
        {
            name: 'description',
            content:
                'Frontend Developer with expertise in Vue, React & Node.js. Experience in building real-time apps, fintech and e-commerce platforms, and cross-platform mobile apps. Proven track record in leading projects from architecture to deployment.'
        }
    ]
})
</script>

<template>
    <div class="experience-page">
        <page-title text="EXPERIENCE" />
        <article-title
            text="SUMMARY"
            class="experience-page__article-title_no-margin"
        />
        <article-block class="experience-page__article-block">
            <template #text>
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
            </template>
        </article-block>
    </div>
</template>

<style lang="scss">
.experience-page {
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

    &__article-title {
        &_no-margin {
            margin: 0;
        }
    }

    &__article-block {
        margin-top: 1.5rem;
    }
}
</style>
