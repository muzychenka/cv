<script setup lang="ts">
import { IMAGES } from '@/shared/lib/constants/images'
import { useAppStore } from '@/entities/app'
import { useSlider } from '@/shared/lib/composables/useSlider'
import { PreloaderWidget, SocialWidget, NavigationWidget } from '@/widgets'

const appStore = useAppStore()

const slider = useSlider()

const percent = ref(0)
const preloadingImagesTimeout = ref<NodeJS.Timeout>()

function onKeyup(e: KeyboardEvent) {
    switch (e.code) {
        case 'ArrowLeft': {
            slider.slideLeft()
            break
        }
        case 'ArrowRight': {
            slider.slideRight()
            break
        }
    }
}

onMounted(() => {
    document.addEventListener('keyup', onKeyup)
    preloadingImagesTimeout.value = setTimeout(async () => {
        for (const [index, imageData] of IMAGES.entries()) {
            await new Promise((resolve, reject) => {
                const image = new Image()
                const { path } = imageData

                image.onload = () => {
                    appStore.preloadedImages.value[index].isLoaded = true
                    resolve('Success')
                }

                image.onerror = () => {
                    appStore.preloadedImages.value[index].isLoaded = undefined
                    reject(new Error('Loading error'))
                }

                image.src = path

                appStore.setPreloadedImages([
                    ...appStore.preloadedImages.value,
                    {
                        ...imageData,
                        isLoaded: false,
                        image
                    }
                ])
            })

            percent.value = ((index + 1) / IMAGES.length) * 100
        }

        setTimeout(() => {
            appStore.setAppLoaded(true)
        }, 1500)
    }, 2000)
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', onKeyup)
    clearTimeout(preloadingImagesTimeout.value)
})
</script>

<template>
    <div class="default-layout">
        <preloader-widget
            v-if="!appStore.isAppLoaded.value"
            :percent="percent"
            class="default-layout__preloader"
        />
        <social-widget />
        <navigation-widget />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    width: 100%;
    height: 100%;
    font-family: 'RobotoCondensed-Regular';
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 7rem 7rem 10rem 2rem rgba($color-black, 0.35);
    background: linear-gradient(rgba($color-fire-engine-red, 0.2) 1px, transparent 0.1rem),
        linear-gradient(90deg, rgba($color-fire-engine-red, 0.2) 1px, transparent 0.1rem);
    background-size: 5rem 5rem;

    &__preloader {
        position: fixed;
        z-index: 101;
    }
}
</style>
