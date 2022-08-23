<template>
    <header>
        <h1 ref="name" class="name">&#8203;</h1>
        <nav>
            <ul>
                <li v-for="n of links.length" :key="n">
                    <router-link :to="links[n-1].path" :class="[{'current': '/' + links[n-1].path === $route.path}]">
                        <span :ref="`path-${n - 1}`">{{ links[n-1].name }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import parsingMixin from '@/mixins/parsing'

export default {
  computed: {
    links () {
      return this.$store.state.navigation.links
    }
  },
  mounted () {
    this.parseText(this.$refs.name, 'DMITRY MUZYCHENKO')
    setTimeout(() => {
      for (let i = 0; i < this.links.length; i++) {
        this.parseText(this.$refs[`path-${i}`], 'redsadasd asd asdasdsa dasd as')
      }
    }, 100)
  },
  mixins: [parsingMixin]
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

header {
    position: fixed;
    top: 0;
    left: 7rem;
    right: 0;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur($blur);
    border-bottom: 1px solid $red2;
    @include desktop {
        border-left: 1px solid $red2;
    }
    padding: 0 4rem;
    z-index: 100;
    @include non-desktop {
        left: 0;
        height: 8rem;
        flex-direction: column;
        padding: 0 2rem;
    }
    .name {
        margin: 0;
        font-family: 'UF1';
        letter-spacing: 0px;
        color: white;
        user-select: none;
        @include desktop {
            font-size: 4rem;
        }
        @include non-desktop {
            font-size: 2.5rem;
            margin-top: 1rem;
            width: 100%;
        }
    }
    nav {
        height: 100%;
        @include tablet {
            width: 100%;
            display: flex;
        }
        @include mobile {
            width: 100%;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            height: 100%;
            @include tablet {
                gap: 4rem;
            }
            @include desktop {
                gap: 4rem;
            }
            @include non-desktop {
                justify-content: space-between;
            }
            li {
                display: flex;
                align-items: center;
                height: 100%;
                a {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'RobotoCondensed-Regular';
                    font-size: 1.75rem;
                    color: $gray;
                    text-decoration: none;
                    letter-spacing: 2px;
                    position: relative;
                    transition: .25s;
                    &.current,
                    &:hover {
                        color: white;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        height: 4px;
                        background-color: $red;
                        box-shadow: 0 0 15px $red;
                        border-radius: 2px;
                        bottom: -2px;
                        transition: .25s;
                    }
                    &:not(.current):after {
                        width: 0;
                    }
                    &.current:after {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
