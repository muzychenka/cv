<script setup lang="ts">
import { PageTitle } from '@/shared/ui'

useHead({
    title: `404 — This page doesn't exist`
})
</script>

<template>
    <nuxt-layout>
        <div class="error">
            <page-title
                text="404"
                class="error__title"
            />
            <div class="error__message">This page doesn't exist</div>
        </div>
    </nuxt-layout>
</template>

<style scoped lang="scss">
.error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    &__title {
        font-size: 4rem;
        color: $color-sky-blue;
        text-shadow: 0 0 5rem $color-sky-blue;
    }

    &__message {
        font-family: 'UF1';
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: -0.25rem;
        font-weight: 600;
        color: $color-fire-engine-red;
        text-shadow: 0 0 5rem $color-fire-engine-red;
    }
}
</style>
