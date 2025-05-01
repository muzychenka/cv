<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: (title) => `${title || 'Loading...'} — Dzmitry Muzychenka's CV`
})
</script>
