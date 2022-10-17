<template>
  <div id="app">
    <Preloader v-if="!loaded" :percent="percent" :currentCaching="currentCaching" />
    <template v-else>
      <Aside />
      <Header />
      <router-view/>
    </template>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'
import sliderMixin from '@/mixins/slider'
import cacheMixin from '@/mixins/cache'

export default {
  data () {
    return {
      currentCaching: [],
      loaded: false,
      percent: 0
    }
  },
  components: {
    Aside,
    Header,
    Preloader
  },
  mounted () {
    document.addEventListener('keyup', e => {
      e.code === 'ArrowLeft' && this.slideLeft()
      e.code === 'ArrowRight' && this.slideRight()
    })
    setTimeout(async _ => {
      for (let i = 0; i < this.$store.state.preload.images.length; i++) {
        await new Promise((resolve, reject) => {
          this.currentCaching.push(this.$store.state.preload.images[i])
          const { path } = this.$store.state.preload.images[i]
          const image = new Image()
          image.onload = resolve
          image.onerror = () => {
            this.currentCaching[this.currentCaching.length - 1].cached = false
            reject(new Error('Loading error'))
          }
          image.src = path
          this.$store.dispatch('setLoadedImage', { index: i, image })
          this.currentCaching[this.currentCaching.length - 1].cached = true
        })
        this.percent = ((i + 1) / this.$store.state.preload.images.length) * 100
      }
      setTimeout(() => {
        this.loaded = true
      }, 1500)
    }, 2000)
  },
  computed: {
    background () {
      return this.loaded ? this.getCachedImage('background').src : null
    }
  },
  mixins: [sliderMixin, cacheMixin]
}
</script>

<style lang="scss">
@import 'src/sass/main.scss';
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

#app {
    font-family: 'RobotoCondensed-Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    justify-content: center;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 7rem 7rem 100px 2rem $shadow;
    background: linear-gradient(0deg, #13161b 0%, #13161b 70%, rgba(82,0,0,1) 100%);
}
</style>
