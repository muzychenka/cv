<script setup lang="ts">
useHead({
    titleTemplate: (title) => `${title || 'Loading...'} — Dzmitry Muzychenka's CV`
})
</script>

<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>
