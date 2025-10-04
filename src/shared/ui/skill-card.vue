<script setup lang="ts">
defineProps<{
    name: string
    icon: any
}>()
</script>

<template>
    <div
        class="skill-card"
        :data-name="name"
    >
        <component
            :is="icon"
            class="skill-card__icon"
        />
        <component
            :is="icon"
            class="skill-card__glitch"
        />
    </div>
</template>

<style scoped lang="scss">
.skill-card {
    $cards: 6;
    width: calc((100vw - (22rem + #{$cards - 1 + 'rem'})) / $cards - 1px);
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.3rem solid $color-garnet;
    background-color: rgba(30, 28, 33, 0.5);
    backdrop-filter: blur($blur);
    position: relative;
    box-sizing: border-box;
    transition: 0.25s;

    @include mobile {
        width: calc(50vw - 3.4rem);
        height: calc(50vw - 3.4rem);
    }

    @include tablet {
        width: calc(33vw - 2.8rem);
        height: calc(33vw - 2.8rem);
    }

    &::before {
        content: attr(data-name);
        justify-content: flex-end;
        letter-spacing: 0.2rem;
        font-size: 1.25rem;
        color: $color-sky-blue;
        display: flex;
        position: absolute;
        left: 0;
        top: -2rem;
        text-shadow: 0 0 1.5rem $color-sky-blue;
    }

    &:hover {
        .skill-card__glitch {
            animation-name: glitch;
            animation-iteration-count: infinite;
        }
    }

    &__icon {
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__glitch {
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        position: absolute;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-name: glitch;
        animation-direction: alternate;
        animation-fill-mode: forwards;

        @keyframes glitch {
            0% {
                transform: translateZ(0);
                clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
            }

            10% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(-0.5rem);
            }

            15% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(0.5rem);
            }

            20% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(-0.5rem);
            }

            25% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(0);
            }

            30% {
                clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
                transform: translate3d(0.5rem, 0, 0);
            }

            35% {
                clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
                transform: translateZ(0);
            }

            40% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                transform: translate3d(0.5rem, 0, 0);
            }

            45% {
                clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
                transform: translate3d(0.5rem, 0, 0);
            }

            50% {
                clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
                transform: translate3d(-0.5rem, 0, 0);
            }

            55% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                transform: translate3d(0.5rem, 0, 0);
            }

            60% {
                clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
                transform: translate3d(0.5rem, 0, 0);
            }

            65% {
                clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
                transform: translate3d(-0.5rem, 0, 0);
            }

            70% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }

            75% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(-0.5rem);
            }

            80% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(0.5rem);
            }

            85% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(-0.5rem);
            }

            90% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(0);
            }

            95% {
                clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
                transform: translate3d(0.5rem, 0, 0);
            }

            99.9% {
                clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
                transform: translateZ(0);
            }

            100% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }
        }
    }
}
</style>
