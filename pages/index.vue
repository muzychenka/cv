<template>
    <div class="about">
        <h1
            id="title-1"
            class="page-title"
        >
            &#8203;
        </h1>
        <div class="about__wrapper">
            <div class="preview-wrapper">
                <img
                    ref="photoElement"
                    :src="glitchedPhoto"
                    class="preview-wrapper__photo"
                >
                <div class="preview-wrapper__description-wrapper">
                    <div class="preview-wrapper__description-filler">
                        <table class="info">
                            <tr
                                v-for="(data) of PROFILE_DATA"
                                :key="'profile-data-' + data.field"
                                class="info__element"
                            >
                                <td class="info__field">{{ data.field }}</td>
                                <td class="info__value">{{ data.value }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="description">
                <h2
                    id="title-2"
                    class="description__title title"
                >
                    &#8203;
                </h2>
                <article class="description__article">
                    My name is Dzmitry. I was born in Minsk, Belarus.<br>
                    I have been working as a developer for three years. I love learning new things and I learn quickly.<br>
                    I started my development journey by creating game servers when I studied at school.<br>
                    I've studied English with a teacher. My current level is B2.
                </article>
                <h2
                    id="title-3"
                    class="description__title title"
                >&#8203;</h2>
                <article class="description__article">Most of all I like to play video games (as you can see from the style of this website). I also go in for sports, I like evening walks, cooking, and also nightly programming.</article>
                <h2
                    id="title-4"
                    class="description__title title"
                >&#8203;</h2>
                <article class="description__article">It's my financial code. Some guys told me that it's my lucky number and I should use it everywhere.</article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GLITCH_INTERVAL, GLITCH_INITIAL_TIMEOUT } from '@/constants/images'
import { imagesEnum } from '@/enums/images'
import { PROFILE_DATA } from '@/constants/profile'
import { ABOUT_TITLES } from '@/constants/about'

useHead({
    title: 'About me'
})

const photoElement = ref<HTMLImageElement>()
const isGlitched = ref(true)
const glitchTimeout = ref<NodeJS.Timeout | undefined>(undefined)
const glitchInterval = ref<ReturnType<typeof setInterval> | undefined>(undefined)

onMounted(() => {
    for (const [index, title] of ABOUT_TITLES.entries()) {
        parseText(document.getElementById(`title-${index + 1}`), title)
    }
    
    glitchTimeout.value = setTimeout(() => {
        isGlitched.value = false
        photoElement.value!.src = defaultPhoto.value
        glitchInterval.value = setInterval(() => {
            photoElement.value!.src = isGlitched.value ? defaultPhoto.value : glitchedPhoto.value
            isGlitched.value = !isGlitched.value
        }, GLITCH_INTERVAL)
    }, GLITCH_INITIAL_TIMEOUT)
})

const glitchedPhoto = computed(() => {
    const image = getCachedImage(imagesEnum.enum.glitchedPhoto)
    return image ? image.src : ''
})
const defaultPhoto = computed(() => {
    const image = getCachedImage(imagesEnum.enum.defaultPhoto)
    return image ? image.src : ''
})

onBeforeUnmount(() => {
    clearTimeout(glitchTimeout.value)
    clearInterval(glitchInterval.value)
})
</script>

<style lang="scss" scoped>
.about {
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
    &__wrapper {
        display: flex;
        align-items: flex-start;
        @include mobile {
            flex-direction: column;
        }
        .preview-wrapper {
            display: flex;
            flex-direction: column;
            @include non-desktop {
                width: 100%;
            }
            &__photo {
                border: 2px solid $red;
                display: flex;
                box-sizing: border-box;
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
                user-select: none;
            }
            &__description-wrapper {
                width: 100%;
                height: 8rem;
                background-color: $red;
                clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
                position: relative;
            }
            &__description-filler {
                position: absolute;
                left: 2px;
                right: 2px;
                bottom: 2px;
                top: 0;
                background-color: rgb(29,27,32);
                font-family: 'UF1';
                color: white;
                padding: 1.5rem;
                clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
            }
            .info {
                border-spacing: 0;
                width: 100%;
                padding: 0;
                margin: 0;
                list-style: none;
                font-size: 1.25rem;
                &__field {
                    color: $blue;
                    text-shadow: 0 0 20px rgba(103, 226, 230, .45);
                }
                &__value {
                    color: $yellow;
                    text-shadow: 0 0 20px rgba(235,192,59, .45);
                }
            }
        }
        .description {
            display: flex;
            flex-direction: column;
            @include tablet {
                margin-left: 4rem;
            }
            @include desktop {
                margin-left: 4rem;
            }
            &__title {
                font-size: 1.5rem;
                letter-spacing: 2px;
                color: white;
                align-self: flex-start;
                padding: 1rem 2rem;
                border: 2px solid $blue;
                @include tablet {
                    &:first-child {
                        margin-top: 0;
                    }
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
                @include desktop {
                    &:first-child {
                        margin-top: 0;
                    }
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
                @include non-desktop {
                    margin-top: 4rem;
                }
            }
        }
    }
}
</style>
