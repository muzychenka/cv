<script setup lang="ts">
import { NAVIGATION_LINKS, parseText } from '@/shared/lib'
import { NavigationLink } from '@/shared/ui'

const nameElement = useTemplateRef('name-element')

onMounted(() => {
    parseText(nameElement.value, 'DZMITRY MUZYCHENKA')
})
</script>

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
                <navigation-link
                    v-for="link of NAVIGATION_LINKS"
                    :key="link.name"
                    :name="link.name"
                    :path="link.path"
                />
            </ul>
        </nav>
    </header>
</template>

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
        box-shadow: 0 0 2rem rgba($color-fire-engine-red, 0.85);
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
}
</style>
