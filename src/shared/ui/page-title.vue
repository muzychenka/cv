<script setup lang="ts">
import { parseText } from '@/shared/lib'

const props = defineProps<{
    text: string
}>()

const titleElement = useTemplateRef('title')

onMounted(() => {
    parseText(titleElement.value, props.text)
})
</script>

<template>
    <h1
        ref="title"
        class="page-title"
    >
        &#8203;
    </h1>
</template>

<style scoped lang="scss">
.page-title {
    margin-top: 0;
    color: $color-fire-engine-red;
    text-shadow: 0 0 5rem $color-fire-engine-red;

    @include desktop {
        font-size: 3rem;
    }
}
</style>
