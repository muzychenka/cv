<template>
    <aside class="aside">
        <ul class="icons">
            <li v-for="n in links.length" :key="n" class="icons__icon">
              <a class="icons__link" :href="links[n - 1].url">
                <component :is="'Icon'" :name="links[n - 1].name"></component>
              </a>
            </li>
        </ul>
        <div class="aside__ticker" ref="ticker"></div>
    </aside>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  mounted () {
    setInterval(() => {
      const value = this.$refs.ticker.innerText
      this.$refs.ticker.innerText = value.length >= 6 ? '' : value + '|'
    }, 1000)
  },
  computed: {
    links () {
      return this.$store.state.social.links
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

.aside {
    width: 7rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur($blur);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    &__ticker {
      font-size: 1.5rem;
      color: $red;
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
        border-top: 2px solid $red;
        box-sizing: border-box;
    }
}

.icons {
  margin: 0;
  list-style: none;
  display: flex;
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
  gap: 4rem;
  &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
          width: 2.25rem;
          height: 2.25rem;
          transition: .25s;
          filter: drop-shadow(0 0 20px rgba(196, 30, 37, 1));
          path {
              fill: $red;
              transition: .25s;
          }
          &:hover {
              path {
                  fill: $red;
              }
          }
      }
  }
}
</style>
