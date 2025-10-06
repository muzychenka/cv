<script setup lang="ts">
const { locale } = useI18n()

useHead({
    titleTemplate: (title) => `${title || 'Loading...'} — Dzmitry Muzychenka's CV`,
    htmlAttrs: {
        lang: locale
    }
})
</script>

<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>
