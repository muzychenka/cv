<template>
    <div class="default-layout">
        <Preloader
            v-if="!appStore.isAppLoaded.value"
            :percent="percent"
            class="default-layout__preloader"
        />
        <Social />
        <Navigation />
        <slot />
    </div>
</template>

<script setup lang="ts">
import { IMAGES } from '@/constants/images'

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
    box-shadow: inset 7rem 7rem 100px 2rem $shadow;
    background: linear-gradient(0deg, #13161b 0%, #13161b 70%, rgba(82, 0, 0, 1) 100%);

    &__preloader {
        position: fixed;
        z-index: 101;
    }
}
</style>
