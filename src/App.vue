<template>
  <div :style="style" id="app">
    <Preloader v-if="!loaded" :percent="percent" />
    <template v-else>
      <Aside />
      <Logo />
      <Header />
      <Slider />
      <Ticker />
      <router-view/>
    </template>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Logo from '@/components/Logo'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Preloader from '@/components/Preloader'
import Ticker from '@/components/Ticker'
import sliderMixin from '@/mixins/slider'
import cacheMixin from '@/mixins/cache'

export default {
  data () {
    return {
      loaded: false,
      percent: 0
    }
  },
  components: {
    Aside,
    Logo,
    Header,
    Preloader,
    Slider,
    Ticker
  },
  mounted () {
    document.addEventListener('keyup', e => {
      e.code === 'ArrowLeft' && this.slideLeft()
      e.code === 'ArrowRight' && this.slideRight()
    })
    setTimeout(async _ => {
      for (let i = 0; i < this.$store.state.preload.images.length; i++) {
        await new Promise((resolve, reject) => {
          const { path } = this.$store.state.preload.images[i]
          const image = new Image()
          image.onload = resolve
          image.onerror = () => reject(new Error('Loading error'))
          image.src = path
          this.$store.dispatch('setLoadedImage', { index: i, image })
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
    },
    style () {
      return {
        backgroundImage: this.background ? `url('${this.background}')` : null
      }
    }
  },
  mixins: [sliderMixin, cacheMixin]
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

#app {
    font-family: 'RobotoCondensed-Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 7rem 7rem 100px 2rem $shadow;
    .page-header {
        margin-top: 0;
    }
    h1 {
        font-family: 'UF1';
        &:not(.name) {
            @include non-desktop {
                font-size: 3rem;
            }
            @include desktop {
                font-size: 4rem;
            }
        }
        color: white;
        white-space: nowrap;
    }
    article {
        font-family: 'RobotoCondensed-Regular';
        font-size: 1.25rem;
        color: white;
        letter-spacing: 2px;
    }
}

@font-face {
    font-family: 'UF1';
    src: url('./assets/fonts/UF1.ttf');
}

@font-face {
    font-family: 'RobotoCondensed-Regular';
    src: url('./assets/fonts/RobotoCondensed-Regular.ttf');
}

body {
    margin: 0;
    overflow: hidden;
}

*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: $red3;
}

*::-webkit-scrollbar-thumb {
    background-color: $red2;
}

*::selection {
    background-color: $red;
}

html,
body {
    width: 100%;
    height: 100%;
}

html {
    font-size: 14px;
    @include non-desktop {
        font-size: 12px;
    }
    -webkit-tap-highlight-color: transparent;
}
</style>
