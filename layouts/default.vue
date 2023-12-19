<template>
    <div class="default">
        <Preloader
            v-if="!appStore.isAppLoaded.value"
            :percent="percent"
        />
        <template v-else>
            <Social />
            <Navigation />
            <slot />
        </template>
    </div>
</template>

<script setup lang="ts">
import { IMAGES } from '@/constants/images'

const appStore = useAppStore()

const percent = ref(0)

onMounted(() => {
    document.addEventListener('keyup', e => {
        e.code === 'ArrowLeft' && slideLeft()
        e.code === 'ArrowRight' && slideRight()
    })

    setTimeout(async () => {
        for (const [index, imageData] of IMAGES.entries()) {
            await new Promise((resolve, reject) => {
                appStore.preloadedImages.value.push({
                    ...imageData,
                    isLoaded: false,
                    image: new Image()
                })

                const { path } = imageData

                appStore.preloadedImages.value[index].image.onload = () => {
                    appStore.preloadedImages.value[index].isLoaded = true
                    resolve('Success')
                }

                appStore.preloadedImages.value[index].image.onerror = () => {
                    appStore.preloadedImages.value[index].isLoaded = undefined
                    reject(new Error('Loading error'))
                }

                appStore.preloadedImages.value[index].image.src = path
            })
            
            percent.value = ((index + 1) / IMAGES.length) * 100
        }

        setTimeout(() => {
            appStore.isAppLoaded.value = true
        }, 1500)
    }, 2000)
})
</script>

<style lang="scss" scoped>
.default {
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
    background: linear-gradient(0deg, #13161b 0%, #13161b 70%, rgba(82,0,0,1) 100%);
}
</style>
