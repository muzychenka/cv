<template>
    <header class="navigation-widget">
        <h1
            ref="name-element"
            class="navigation-widget__name"
        >
            &#8203;
        </h1>
        <nav class="navigation-widget__nav">
            <ul class="navigation-widget__list">
                <li
                    v-for="(link, index) of NAVIGATION_LINKS"
                    :key="link.name"
                    class="navigation-widget__list-item"
                >
                    <nuxt-link
                        :to="link.path"
                        class="navigation-widget__link"
                        active-class="navigation-widget__link_current"
                    >
                        <span :id="'path-' + index">{{ link.name }}</span>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { NAVIGATION_LINKS, parseText } from '@/shared/lib'

const nameElement = useTemplateRef('name-element')

onMounted(() => {
    parseText(nameElement.value, 'DZMITRY MUZYCHENKA')
    setTimeout(() => {
        for (const [index, link] of NAVIGATION_LINKS.entries()) {
            parseText(document.getElementById('path-' + index), link.name)
        }
    }, 100)
})
</script>

<style lang="scss" scoped>
.navigation-widget {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(0.05rem);
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.2rem;
        box-shadow: 0 0 2rem rgba(196, 30, 37, 0.85);
        bottom: -0.3rem;
        z-index: -1;
        transition: 0.25s;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.3rem;
        background-color: $color-fire-engine-red;
        bottom: -0.3rem;
        z-index: -1;
        transition: 0.25s;
    }

    @include desktop {
        left: 11rem;
        right: calc(11rem + 4px);
        box-sizing: border-box;
        height: 6.5rem;
    }

    @include non-desktop {
        left: 0;
        right: 0;
        height: 8rem;
        flex-direction: column;
        padding: 0 2rem;
    }

    &__name {
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

    &__nav {
        height: 100%;

        @include tablet {
            width: 100%;
            display: flex;
        }

        @include mobile {
            width: 100%;
        }
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        height: 100%;

        @include tablet {
            gap: 4rem;
        }

        @include desktop {
            gap: 4rem;
        }

        @include non-desktop {
            justify-content: space-between;
        }
    }

    &__list-item {
        display: flex;
        align-items: center;
        height: 100%;
    }

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

        &:after {
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
            text-shadow: 0 0 2rem rgba(103, 226, 230, 0.95);

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
