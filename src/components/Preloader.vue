<template>
    <div class="preloader">
        <div class="bar-wrapper">
            <div class="hacking-wrapper">
                <Icon :class="['caution-wrapper', {'hacked': percent >= 100}]" name="caution" />
                <h2 class="title">
                    <template v-if="percent < 100">HACKING</template>
                    <template v-else>HACKED</template>
                </h2>
                <span class="percent">{{ Math.floor(percent) }}%</span>
            </div>
            <div class="bar">
                <div :style="{width: `${percent}%`}" class="fill"></div>
            </div>
            <span class="codes">{{ codes }}</span>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon'
import parseMixin from '@/mixins/parsing'

export default {
  props: {
    percent: Number
  },
  data () {
    return {
      codes: '',
      codesInterval: null
    }
  },
  created () {
    this.codesInterval = setInterval(_ => {
      this.codes = this.generateCipher(Math.random() * 20)
    }, 30)
  },
  beforeDestroy () {
    clearInterval(this.codesInterval)
  },
  mixins: [parseMixin],
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '../sass/variables.scss';

.preloader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;
    .bar-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        align-self: center;
        position: relative;
        .hacking-wrapper {
            display: flex;
            margin-bottom: .5rem;
        }
        .caution-wrapper {
            width: 1.5rem;
            height: 1.5rem;
            align-self: center;
            &:not(.hacked) {
                path {
                    animation: fading .5s;
                    animation-fill-mode: forwards;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
            }
            path {
                fill: $red;
            }
            @keyframes fading {
                0% {
                    opacity: .5;
                }
                100% {
                    opacity: 1;
                }
            }
        }
        .title {
            color: $red;
            font-family: 'UF1';
            margin: 0 0 0 1rem;
        }
        .percent {
            color: $red;
            font-family: 'UF1';
            position: absolute;
            right: 0;
            align-self: flex-end;
        }
        .codes {
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
            .fill {
                width: 50%;
                height: 100%;
                background-color: $red;
                transition: .25s;
            }
        }
    }
}
</style>
