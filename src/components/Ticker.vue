<template>
    <div class="ticker">
        <span ref="text"></span>
    </div>
</template>

<script>
import parsingMixin from '@/mixins/parsing'

export default {
  data () {
    return {
      cipherInterval: null
    }
  },
  mounted () {
    const min = 25
    const max = 40
    this.parseText(this.$refs.text, this.generateCipher(Math.floor(Math.random() * (max - min) + min)))
    this.cipherInterval = setInterval(_ => this.parseText(this.$refs.text, this.generateCipher(Math.floor(Math.random() * (max - min) + min))), 10000)
  },
  beforeDestroy () {
    clearInterval(this.cipherInterval)
  },
  mixins: [parsingMixin]
}
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/screens.scss';

.ticker {
    font-family: 'UF1';
    font-size: 1.35rem;
    font-weight: bold;
    color: $red3;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    user-select: none;
    @include non-desktop {
        display: none;
    }
}
</style>
