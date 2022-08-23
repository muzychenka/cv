<template>
    <aside>
        <ul class="icons">
            <li v-for="n in links.length" :key="n" class="icon">
              <a :href="links[n - 1].url">
                <component :is="'Icon'" :name="links[n - 1].name"></component>
              </a>
            </li>
        </ul>
    </aside>
</template>

<script>
import Icon from '@/components/Icon'

export default {
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

aside {
    width: 7rem;
    height: 100%;
    backdrop-filter: blur($blur);
    position: fixed;
    top: 7rem;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 1px solid $red2;
    @include desktop {
        border-right: 1px solid $red2;
    }
    @include non-desktop {
        width: 100%;
        height: 5rem;
        top: auto;
        bottom: 0;
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
          border-bottom: 1px solid $red2;
      }
      gap: 4rem;
      .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
              width: 2.25rem;
              height: 2.25rem;
              opacity: 1;
              transition: .25s;
              path {
                  fill: $red2;
                  transition: .25s;
              }
              &:hover {
                  opacity: 1;
                  filter: none;
                  path {
                      fill: $red;
                  }
              }
          }
      }
    }
}
</style>
