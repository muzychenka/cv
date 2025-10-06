<script setup lang="ts">
withDefaults(
    defineProps<{
        bottom?: string
    }>(),
    {
        bottom: '127.0.0.1'
    }
)

defineSlots<{
    text: []
    bottom?: []
}>()
</script>

<template>
    <article
        class="article-block"
        :data-bottom="bottom"
    >
        <slot name="text" />
    </article>
</template>

<style scoped lang="scss">
.article-block {
    font-family: 'RobotoCondensed-Regular';
    font-size: 1.25rem;
    color: $color-meat-brown;
    text-shadow: 0 0 2rem rgb($color-meat-brown, 0.45);
    letter-spacing: 0.2rem;
    line-height: 2.5rem;
    padding: 1rem 2rem;
    border: 0.2rem solid $color-meat-brown;
    background-color: rgba(29, 27, 32, 0.8);
    backdrop-filter: blur($blur);
    align-self: flex-start;
    position: relative;

    &::after {
        position: absolute;
        bottom: -2.25rem;
        right: 0;
        font-size: 0.75rem;
        color: $color-meat-brown;
        display: flex;
        content: attr(data-bottom);
    }
}
</style>
