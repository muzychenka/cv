<script setup lang="ts">
import { parseText } from '@/shared/lib'

const props = defineProps<{
    name: string
    path: string
}>()

const { t } = useI18n()

const text = useTemplateRef('text')

onMounted(() => {
    parseText(text.value, t(props.name))
})
</script>

<template>
    <li class="navigation-link">
        <nuxt-link
            :to="path"
            class="navigation-link__link"
            active-class="navigation-link__link_current"
        >
            <span ref="text">&#8203;</span>
        </nuxt-link>
    </li>
</template>

<style scoped lang="scss">
.navigation-link {
    display: flex;
    align-items: center;
    height: 100%;

    &__link {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'RobotoCondensed-Regular';
        font-size: 1.35rem;
        color: $color-smoky-topaz;
        text-decoration: none;
        letter-spacing: 0.2rem;
        position: relative;
        text-transform: uppercase;
        transition: 0.25s;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 0.3rem;
            background-color: $color-sky-blue;
            box-shadow: 0 0 1.5rem $color-sky-blue;
            bottom: -0.3rem;
            transform: scaleX(0);
            transition: 0.25s;
        }

        &_current {
            color: $color-sky-blue;
            text-shadow: 0 0 2rem rgba($color-sky-blue, 0.95);

            &::after {
                transform: scale(1);
            }
        }

        &:not(&_current):hover {
            color: $color-fire-engine-red;
        }
    }
}
</style>
