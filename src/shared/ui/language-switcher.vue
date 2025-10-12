<script setup lang="ts">
type TLocales = 'en' | 'be'

const props = defineProps<{
    locale: string
    locales: {
        code: TLocales
        name: string | undefined
        language: string | undefined
    }[]
}>()

const emit = defineEmits<{
    select: [TLocales]
}>()

const isOpen = defineModel<boolean>()

const currentLocale = computedEager(() =>
    props.locales.find((locale) => locale.code === props.locale)
)
const normalizedLocales = computedEager(() =>
    props.locales.filter((locale) => locale.code !== props.locale)
)
</script>

<template>
    <div
        tabindex="0"
        class="language-switcher"
        @blur="isOpen = false"
    >
        <div
            class="language-switcher__current-language"
            @click="isOpen = !isOpen"
        >
            {{ currentLocale?.code }}
        </div>
        <div
            v-if="isOpen"
            class="language-switcher__languages"
        >
            <div
                v-for="language of normalizedLocales"
                :key="language.code"
                class="language-switcher__language"
                @click.prevent="emit('select', language.code), (isOpen = false)"
            >
                {{ language.code }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.language-switcher {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'RobotoCondensed-Regular';
    font-size: 1.25rem;
    color: $color-smoky-topaz;
    text-decoration: none;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    border: none;
    margin: 0;
    padding: 0;
    filter: drop-shadow(0 0 2rem $color-fire-engine-red);
    transition: 0.25s;

    &__language {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        min-width: 4rem;
        min-height: 4rem;
        font-family: 'RobotoCondensed-Regular';
        font-size: 1.25rem;
        cursor: pointer;
        background-color: transparent;
        color: $color-smoky-topaz;
        text-transform: uppercase;
        box-sizing: border-box;
        border-top: 0.2rem solid $color-fire-engine-red;
        border-bottom: 0.2rem solid $color-fire-engine-red;

        @include non-desktop {
            width: 3rem;
            height: 3rem;
            min-width: 3rem;
            min-height: 3rem;
        }

        &:last-child {
            border-right: 0.2rem solid $color-fire-engine-red;
        }
    }

    &__current-language {
        background-color: rgba($color-black, 0.25);
        backdrop-filter: blur($blur);
        border: 0.2rem solid $color-fire-engine-red;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        position: relative;
        box-sizing: border-box;

        @include non-desktop {
            width: 3rem;
            height: 3rem;
        }
    }

    &__languages {
        backdrop-filter: blur($blur);
        background-color: rgba($color-black, 0.5);
        display: flex;
        width: 100%;
        position: absolute;
        left: 100%;
        box-sizing: border-box;
        top: 0;
    }
}
</style>
