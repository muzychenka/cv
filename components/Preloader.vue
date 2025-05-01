<template>
    <div class="preloader">
        <div class="process-wrapper">
            <div
                v-for="(image, index) in normalizedPreloadedImages"
                :key="'process-line-' + index"
                class="process-wrapper__line"
            >
                <span class="process-wrapper__title">CACHING........IMAGE</span>
                <span class="process-wrapper__filename">FILENAME: {{ image.name }}</span>
                <span class="process-wrapper__path">PATH: {{ image.path }}</span>
                <span
                    v-if="image.isLoaded || image.isLoaded === undefined"
                    class="process-wrapper__result"
                >
                    RESULT: {{ image.isLoaded ? 'SUCCESS' : 'FAILED' }}
                </span>
            </div>
        </div>
        <div class="bar-wrapper">
            <div class="preparing-wrapper">
                <component
                    :is="caution"
                    :class="{ ready: isReady }"
                    class="caution-wrapper"
                />
                <h2 class="preparing-wrapper__title">
                    {{ isReady ? 'READY' : 'PREPARING' }}
                </h2>
                <span class="preparing-wrapper__percent">{{ Math.floor(percent) }}%</span>
            </div>
            <div class="bar">
                <div
                    :style="{ width: `${percent}%` }"
                    class="bar__fill"
                />
            </div>
            <span class="bar-wrapper__codes">{{ codes }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import caution from '@/assets/icons/caution.svg'

const appStore = useAppStore()

const props = defineProps<{
    percent: number
}>()

const codes = ref('')
const codesInterval = ref<ReturnType<typeof setInterval> | undefined>(undefined)

const isReady = computedEager(() => props.percent === 100)
const normalizedPreloadedImages = computedEager(() =>
    appStore.preloadedImages.value.filter((image) => image.isLoaded)
)

onMounted(() => {
    codesInterval.value = setInterval(() => {
        codes.value = generateCipher(Math.floor(Math.random() * 20))
    }, 30)
})

onBeforeUnmount(() => {
    clearInterval(codesInterval.value)
})
</script>

<style lang="scss" scoped>
.preloader {
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;

    .process-wrapper {
        display: flex;
        gap: 2rem;
        position: absolute;
        left: 5rem;
        bottom: 2.5rem;
        display: flex;
        flex-direction: column;

        @include mobile {
            left: 2rem;
            bottom: 2rem;
        }

        &__line {
            display: flex;
            color: $red2;
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    .bar-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        align-self: center;
        position: relative;

        .preparing-wrapper {
            display: flex;
            margin-bottom: 0.5rem;

            &__title {
                color: $blue;
                text-shadow: 0 0 20px rgba(103, 226, 230, 0.45);
                font-family: 'UF1';
                margin: 0 0 0 1rem;
            }

            &__percent {
                color: $red;
                font-family: 'UF1';
                position: absolute;
                right: 0;
                align-self: flex-end;
            }
        }

        .caution-wrapper {
            width: 1.5rem;
            height: 1.5rem;
            align-self: center;
            fill: $red;

            &:not(.ready) {
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

        &__codes {
            font-family: 'UF1';
            font-size: 1.5rem;
            color: $red;
            margin-top: 1rem;
            position: absolute;
            bottom: -2rem;
        }

        .bar {
            width: 15rem;
            height: 1.5rem;
            border: 2px solid $red;
            box-shadow: 0 0 8rem $red;

            &__fill {
                width: 50%;
                height: 100%;
                background-color: $red;
                transition: 0.25s;
            }
        }
    }
}
</style>
