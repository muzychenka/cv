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
    const MIN_CIPHER_LENGTH = 25
    const MAX_CIPHER_LENGTH = 40
    this.parseText(this.$refs.text, this.generateCipher(Math.floor(Math.random() * (MAX_CIPHER_LENGTH - MIN_CIPHER_LENGTH) + MIN_CIPHER_LENGTH)))
    this.cipherInterval = setInterval(_ => this.parseText(this.$refs.text, this.generateCipher(Math.floor(Math.random() * (MAX_CIPHER_LENGTH - MIN_CIPHER_LENGTH) + MIN_CIPHER_LENGTH))), 10000)
  },
  beforeDestroy () {
    clearInterval(this.cipherInterval)
  },
  mixins: [parsingMixin]
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

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
