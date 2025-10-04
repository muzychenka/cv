<script setup lang="ts">
import { LinkedInIcon, InstagramIcon, GithubIcon, TelegramIcon } from '@/shared/ui'
import { socialsEnum, SOCIAL_LINKS, TICKER_INTERVAL } from '@/shared/lib'

const tickerInterval = ref<ReturnType<typeof setInterval>>()

const ticker = useTemplateRef('ticker')

const icons = computedEager(() => ({
    [socialsEnum.enum.linkedin]: markRaw(LinkedInIcon),
    [socialsEnum.enum.github]: markRaw(GithubIcon),
    [socialsEnum.enum.telegram]: markRaw(TelegramIcon),
    [socialsEnum.enum.instagram]: markRaw(InstagramIcon)
}))

onMounted(() => {
    tickerInterval.value = setInterval(() => {
        const value = ticker.value!.innerText
        ticker.value!.innerText = value.length >= 6 ? '' : value + '|'
    }, TICKER_INTERVAL)
})

onBeforeUnmount(() => {
    clearInterval(tickerInterval.value)
})
</script>

<template>
    <aside class="social-widget">
        <ul class="social-widget__icons-list">
            <li
                v-for="link in SOCIAL_LINKS"
                :key="link.name"
                class="social-widget__icon-wrapper"
            >
                <a
                    class="social-widget__icon-link"
                    :href="link.url"
                >
                    <component
                        :is="icons[link.name]"
                        :name="link.name"
                        class="social-widget__icon"
                    />
                </a>
            </li>
        </ul>
        <div
            ref="ticker"
            class="social-widget__ticker"
        />
    </aside>
</template>

<style lang="scss" scoped>
.social-widget {
    width: 7rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    &__ticker {
        font-size: 1.5rem;
        color: $color-fire-engine-red;
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
        border-top: 0.2rem solid $color-fire-engine-red;
        box-sizing: border-box;
    }

    &__icons-list {
        margin: 0;
        list-style: none;
        display: flex;
        gap: 4rem;

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
    }

    &__icon-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__icon {
        width: 2.25rem;
        height: 2.25rem;
        filter: drop-shadow(0 0 2rem $color-fire-engine-red);

        &:deep(path) {
            fill: $color-fire-engine-red;
        }
    }
}
</style>
