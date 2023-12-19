<template>
    <aside class="aside">
        <ul class="icons">
            <li
                v-for="link in SOCIAL_LINKS"
                :key="link.name"
                class="icons__icon-wrapper"
            >
                <a
                    class="icons__icon-link"
                    :href="link.url"
                >
                    <component
                        :is="icons[link.name]"
                        :name="link.name"
                        class="icons__icon"
                    />
                </a>
            </li>
        </ul>
        <div
            ref="tickerElement"
            class="aside__ticker"
        />
    </aside>
</template>

<script setup lang="ts">
import { socialsEnum } from '@/enums/social'
import LinkedIn from '@/assets/icons/linkedin.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Telegram from '@/assets/icons/telegram.svg'
import Github from '@/assets/icons/github.svg'
import { SOCIAL_LINKS } from '@/constants/social'

const tickerElement = ref<HTMLElement>()

const icons = computedEager(() => ({
    [socialsEnum.enum.linkedin]: shallowRef(LinkedIn),
    [socialsEnum.enum.github]: shallowRef(Github),
    [socialsEnum.enum.telegram]: shallowRef(Telegram),
    [socialsEnum.enum.instagram]: shallowRef(Instagram)
}))

onMounted(() => {
    setInterval(() => {
        const value = tickerElement.value!.innerText
        tickerElement.value!.innerText = value.length >= 6 ? '' : value + '|'
    }, 1000)
})
</script>

<style lang="scss" scoped>
.aside {
    width: 7rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur($blur);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    &__ticker {
        font-size: 1.5rem;
        color: $red;
        font-weight: bold;
        position: absolute;
        left: 2.5rem;
        bottom: 2rem;
        user-select: none;
        @include non-desktop {
            display: none;
        }
    }
    @include non-desktop {
        width: 100%;
        height: 5rem;
        top: auto;
        bottom: 0;
        border-top: 2px solid $red;
        box-sizing: border-box;
    }
    .icons {
        margin: 0;
        list-style: none;
        display: flex;
        @include non-desktop {
            box-sizing: border-box;
            height: 100%;
            padding: 1rem 2rem;
            justify-content: center;
        }
        @include desktop {
            flex-direction: column;
            padding: 4rem 0;
        }
        gap: 4rem;
        &__icon-link {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__icon {
            width: 2.25rem;
            height: 2.25rem;
            filter: drop-shadow(0 0 20px rgba(196, 30, 37, 1));
            &:deep(path) {
                fill: $red;
            }
        }
    }
}
</style>