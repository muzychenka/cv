<script setup lang="ts">
defineProps<{
    images: {
        name: string
        path: string
        isLoaded?: boolean
    }[]
}>()
</script>

<template>
    <div class="logs">
        <div
            v-for="image in images"
            :key="image.name"
            class="logs__line"
        >
            <span>CACHING........IMAGE</span>
            <span>FILENAME: {{ image.name }}</span>
            <span>PATH: {{ image.path }}</span>
            <span v-if="image.isLoaded || image.isLoaded === undefined">
                RESULT: {{ image.isLoaded ? 'SUCCESS' : 'FAILED' }}
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.logs {
    display: flex;
    gap: 2rem;
    position: absolute;
    left: 5rem;
    bottom: 2.5rem;
    display: flex;
    flex-direction: column;

    @include mobile {
        left: 2rem;
        bottom: 2rem;
    }

    &__line {
        display: flex;
        color: $color-garnet;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
