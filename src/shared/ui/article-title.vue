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
    <h2
        ref="title"
        class="article-title"
    >
        &#8203;
    </h2>
</template>

<style scoped lang="scss">
.article-title {
    color: $color-sky-blue;
    text-shadow: 0 0 2rem rgba(103, 226, 230, 0.45);
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    align-self: flex-start;
    padding: 1rem 2rem;
    border: 0.2rem solid $color-sky-blue;

    @include mobile {
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }
}
</style>
