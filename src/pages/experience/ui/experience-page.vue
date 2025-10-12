<script setup lang="ts">
import { ArticleBlock, PageTitle, ArticleTitle } from '@/shared/ui'

const { t } = useI18n()

useHead({
    title: computed(() => t('experience.title')),
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
        <page-title
            :key="t('experience.page-title')"
            :text="t('experience.page-title')"
        />
        <article-title
            :key="t('experience.summary.title')"
            :text="t('experience.summary.title')"
            class="experience-page__article-title_no-margin"
        />
        <article-block class="experience-page__article-block">
            <template #text>
                <div v-html="t('experience.summary.article')" />
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
