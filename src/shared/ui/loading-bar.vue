<script setup lang="ts">
import { CautionIcon } from '@/shared/ui'
import { generateCipher, LOADING_BAR_CIPHER_INTERVAL } from '@/shared/lib'

const props = defineProps<{
    percent: number
}>()

const codes = ref<string>()
const codesInterval = ref<ReturnType<typeof setInterval> | undefined>(undefined)

const isReady = computedEager(() => props.percent === 100)

onMounted(() => {
    codesInterval.value = setInterval(() => {
        codes.value = generateCipher(Math.floor(Math.random() * 20))
    }, LOADING_BAR_CIPHER_INTERVAL)
})

onBeforeUnmount(() => {
    clearInterval(codesInterval.value)
})
</script>

<template>
    <div class="loading-bar">
        <div class="loading-bar__wrapper">
            <component
                :is="CautionIcon"
                :class="{ 'loading-bar__caution-wrapper_ready': isReady }"
                class="loading-bar__caution-wrapper"
            />
            <h2 class="loading-bar__title">
                {{ isReady ? 'READY' : 'PREPARING' }}
            </h2>
            <span class="loading-bar__percent">{{ Math.floor(percent) }}%</span>
        </div>
        <div class="loading-bar__bar">
            <div
                :style="{ width: `${percent}%` }"
                class="loading-bar__bar-fill"
            />
        </div>
        <span class="loading-bar__codes">{{ codes }}</span>
    </div>
</template>

<style scoped lang="scss">
.loading-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    position: relative;

    &__codes {
        font-family: 'UF1';
        font-size: 1.5rem;
        color: $color-fire-engine-red;
        margin-top: 1rem;
        position: absolute;
        bottom: -2rem;
    }

    &__bar {
        width: 15rem;
        height: 1.5rem;
        border: 0.2rem solid $color-fire-engine-red;
        box-shadow: 0 0 8rem $color-fire-engine-red;
    }

    &__bar-fill {
        width: 50%;
        height: 100%;
        background-color: $color-fire-engine-red;
        transition: 0.25s;
    }

    &__caution-wrapper {
        width: 1.5rem;
        height: 1.5rem;
        align-self: center;
        fill: $color-fire-engine-red;

        &:not(&_ready) {
            animation: fading 0.5s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        @keyframes fading {
            0% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
    }

    &__title {
        color: $color-sky-blue;
        text-shadow: 0 0 2rem rgba(103, 226, 230, 0.45);
        font-family: 'UF1';
        margin: 0 0 0 1rem;
    }

    &__percent {
        color: $color-fire-engine-red;
        font-family: 'UF1';
        position: absolute;
        right: 0;
        align-self: flex-end;
    }

    &__wrapper {
        display: flex;
        margin-bottom: 0.5rem;
    }
}
</style>
