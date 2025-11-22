<script setup lang="ts">
import { eImages, GLITCH_INTERVAL, GLITCH_INITIAL_TIMEOUT, PROFILE_DATA } from '@/shared/lib'
import { useAppStore } from '@/entities/app'
import { ArticleBlock, PageTitle, ArticleTitle } from '@/shared/ui'

const { t } = useI18n()

useHead({
    title: computed(() => t('about-me.title')),
    meta: [
        {
            name: 'description',
            content:
                'Dzmitry Muzychenka - frontend developer experienced in Vue, Nuxt, TypeScript, and JavaScript. Passionate about building modern web apps, continuous learning, and international collaboration.'
        }
    ]
})

const appStore = useAppStore()

const photo = useTemplateRef('photo')
const isGlitched = ref(true)
const glitchTimeout = ref<NodeJS.Timeout>()
const glitchInterval = ref<ReturnType<typeof setInterval>>()

onMounted(() => {
    glitchTimeout.value = setTimeout(() => {
        isGlitched.value = false
        photo.value!.src = defaultPhoto.value
        glitchInterval.value = setInterval(() => {
            photo.value!.src = isGlitched.value ? defaultPhoto.value : glitchedPhoto.value
            isGlitched.value = !isGlitched.value
        }, GLITCH_INTERVAL)
    }, GLITCH_INITIAL_TIMEOUT)
})

const glitchedPhoto = computedEager(
    () => appStore.getCachedImage(eImages.enum.glitchedPhoto)?.path || ''
)
const defaultPhoto = computedEager(
    () => appStore.getCachedImage(eImages.enum.defaultPhoto)?.path || ''
)

onBeforeUnmount(() => {
    clearTimeout(glitchTimeout.value)
    clearInterval(glitchInterval.value)
})
</script>

<template>
    <div class="about-me-page">
        <page-title
            :key="t('about-me.page-title')"
            :text="t('about-me.page-title')"
        />
        <div class="about-me-page__wrapper">
            <div class="about-me-page__preview-wrapper">
                <img
                    ref="photo"
                    :src="glitchedPhoto"
                    class="about-me-page__photo"
                />
                <div class="about-me-page__description-wrapper">
                    <div class="about-me-page__description-filler">
                        <client-only>
                            <table class="about-me-page__info">
                                <tr
                                    v-for="data of PROFILE_DATA"
                                    :key="data.field"
                                    class="about-me-page__element"
                                >
                                    <td class="about-me-page__field">{{ t(data.field) }}</td>
                                    <td class="about-me-page__value">{{ t(data.value) }}</td>
                                </tr>
                            </table>
                        </client-only>
                    </div>
                </div>
            </div>
            <div class="about-me-page__description">
                <article-title
                    :key="t('about-me.main.title')"
                    :text="t('about-me.main.title')"
                    class="about-me-page__article-title_no-margin"
                />
                <article-block class="about-me-page__article-block">
                    <template #text>
                        {{ t('about-me.main.article') }}
                    </template>
                </article-block>
                <article-title
                    :key="t('about-me.hobbies.title')"
                    :text="t('about-me.hobbies.title')"
                    class="about-me-page__article-title_margin-top"
                />
                <article-block class="about-me-page__article-block">
                    <template #text>
                        {{ t('about-me.hobbies.article') }}
                    </template>
                </article-block>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-me-page {
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
        &_margin-top {
            margin: 4rem 0 0;
        }

        &_no-margin {
            margin: 0;
        }
    }

    &__article-block {
        margin-top: 1.5rem;
    }

    &__wrapper {
        display: flex;
        align-items: flex-start;

        @include mobile {
            flex-direction: column;
        }
    }

    &__photo {
        border: 0.2rem solid $color-fire-engine-red;
        display: flex;
        box-sizing: border-box;
        user-select: none;

        @include mobile {
            width: 100%;
            height: 100%;
        }

        @include tablet {
            width: 344px;
            height: 512px;
        }

        @include desktop {
            width: 344px;
            height: 512px;
        }
    }

    &__preview-wrapper {
        display: flex;
        flex-direction: column;

        @include non-desktop {
            width: 100%;
        }
    }

    &__description-wrapper {
        width: 100%;
        height: 8rem;
        background-color: $color-fire-engine-red;
        clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
        position: relative;
    }

    &__description-filler {
        position: absolute;
        left: 0.2rem;
        right: 0.2rem;
        bottom: 0.2rem;
        top: 0;
        background-color: rgb(29, 27, 32);
        font-family: 'UF1';
        color: white;
        padding: 1.5rem;
        clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
    }

    &__info {
        border-spacing: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 1.25rem;
    }

    &__field {
        color: $color-sky-blue;
        text-shadow: 0 0 2rem rgba($color-sky-blue, 0.45);
    }

    &__value {
        color: $color-meat-brown;
        text-shadow: 0 0 2rem rgba($color-meat-brown, 0.45);
    }

    &__description {
        display: flex;
        flex-direction: column;

        @include mobile {
            margin-top: 4rem;
        }

        @include tablet {
            margin-left: 4rem;
        }

        @include desktop {
            margin-left: 4rem;
        }
    }
}
</style>
