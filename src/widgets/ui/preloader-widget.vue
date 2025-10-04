<script setup lang="ts">
import { Logs, LoadingBar } from '@/shared/ui'
import { useAppStore } from '@/entities/app'

const appStore = useAppStore()

defineProps<{
    percent: number
}>()

const normalizedPreloadedImages = computedEager(() =>
    appStore.preloadedImages.value.filter((image) => image.isLoaded)
)
</script>

<template>
    <div class="preloader">
        <logs :images="normalizedPreloadedImages" />
        <loading-bar :percent="percent" />
    </div>
</template>

<style lang="scss" scoped>
.preloader {
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;
}
</style>
