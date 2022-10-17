<template>
    <div class="skills">
        <h1 class="page-title" ref="title">&#8203;</h1>
        <div class="skills__cards-wrapper">
            <div v-for="n in skills.length" :key="n" class="skills__card card" :name="skills[n - 1].name">
                <Icon class="card__icon" :name="skills[n - 1].icon" />
                <Icon class="card__glitch" :name="skills[n - 1].icon" />
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon'
import parsingMixin from '@/mixins/parsing'

export default {
  mounted () {
    this.parseText(this.$refs.title, 'SKILLS')
  },
  computed: {
    skills () {
      return this.$store.state.profile.skills
    }
  },
  mixins: [parsingMixin],
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

.skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    @include desktop {
        padding: 4rem 11rem 7rem 11rem;
        margin-top: 6.5rem;
    }
    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }
    &__cards-wrapper {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        @include tablet {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @include mobile {
            grid-template-columns: 1fr 1fr;
        }
        row-gap: 3rem;
        justify-items: center;
    }
    &__card {
        width: 10vw;
        height: 10vw;
        @include mobile {
            width: calc(50vw - 3.4rem);
            height: calc(50vw - 3.4rem);
        }
        @include tablet {
            width: calc(33vw - 2.8rem);
            height: calc(33vw - 2.8rem);
        }
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid $red2;
        background-color: rgb(30,28,33);
        backdrop-filter: blur($blur);
        position: relative;
        transition: .25s;
    }
    .card {
        &:before {
            content: attr(name);
            justify-content: flex-end;
            letter-spacing: 2px;
            font-size: 1.25rem;
            color: $blue;
            display: flex;
            position: absolute;
            left: 0;
            top: -2rem;
            text-shadow: 0 0 15px $blue;
        }
        &__icon {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                width: 50%;
                height: 50%;
            }
        }
        &:hover {
            .card__glitch {
                animation-name: glitch;
                animation-iteration-count: infinite;
            }
        }
        &__glitch {
            width: 50%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            animation-duration: 1.5s;
            animation-timing-function: linear;
            animation-name: glitch;
            animation-direction: alternate;
            animation-fill-mode: forwards;
        }
        @keyframes glitch {
            0% {
                transform: translateZ(0);
                clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
            }
            10% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(-5px);
            }
            15% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(5px);
            }
            20% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(-5px);
            }
            25% {
                clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
                transform: translate(0);
            }
            30% {
                clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
                transform: translate3d(5px, 0, 0);
            }
            35% {
                clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
                transform: translateZ(0);
            }
            40% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                transform: translate3d(5px, 0, 0);
            }
            45% {
                clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
                transform: translate3d(5px, 0, 0);
            }
            50% {
                clip-path:polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
                transform:translate3d(-5px, 0, 0);
            }
            55% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                transform: translate3d(5px, 0, 0);
            }
            60% {
                clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
                transform: translate3d(5px, 0, 0);
            }
            65% {
                clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
                transform: translate3d(-5px, 0, 0);
            }
            70% {
                clip-path: polygon(0 0, 0 0, 0 0, 0 0);
            }
            75% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(-5px);
            }
            80% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(5px);
            }
            85% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(-5px);
            }
            90% {
                clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
                transform: translate(0);
            }
            95% {
                clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
                transform: translate3d(5px, 0, 0);
            }
            99.9% {
                clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
                transform: translateZ(0);
            }
            100% {
                clip-path:polygon(0 0, 0 0, 0 0, 0 0);
            }
        }
    }
}
</style>
