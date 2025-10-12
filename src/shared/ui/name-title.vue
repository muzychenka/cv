<script setup lang="ts">
import { parseText } from '@/shared/lib'

const props = defineProps<{
    name: string
}>()

const nameElement = useTemplateRef('name-element')

onMounted(() => {
    parseText(nameElement.value, props.name)
})
</script>

<template>
    <h1
        ref="name-element"
        class="name-title"
    >
        &#8203;
    </h1>
</template>

<style scoped lang="scss">
.name-title {
    margin: 0;
    font-family: 'UF1';
    letter-spacing: 0;
    user-select: none;
    color: $color-sky-blue;
    text-shadow: 0 0 3rem $color-sky-blue;
    text-wrap: nowrap;

    @include desktop {
        font-size: 1.75rem;
        position: absolute;
        left: 0;
    }

    @include non-desktop {
        font-size: 2.5rem;
        margin-top: 1rem;
        width: 100%;
    }
}
</style>
