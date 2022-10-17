<template>
    <header class="header">
        <h1 class="header__name" ref="name">&#8203;</h1>
        <nav class="">
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

.header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur($blur);
    z-index: 100;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        box-shadow: 0 0 20px rgba(196, 30, 37, .85);
        bottom: -4px;
        z-index: -1;
        transition: .25s;
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: $red;
        bottom: -4px;
        z-index: -1;
        transition: .25s;
    }
    @include desktop {
        left: 11rem;
        right: calc(11rem + 4px);
        box-sizing: border-box;
        height: 6.5rem;
    }
    @include non-desktop {
        left: 0;
        right: 0;
        height: 8rem;
        flex-direction: column;
        padding: 0 2rem;
    }
    &__name {
        margin: 0;
        font-family: 'UF1';
        letter-spacing: 0px;
        user-select: none;
        color: $blue;
        text-shadow: 0 0 30px rgba(103, 226, 230, 1);
        @include desktop {
            font-size: 1.75rem;
            position: absolute;
            left: 0;
        }
        @media (max-width: 1280px) {
            font-size: 1rem;
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
                    font-size: 1.35rem;
                    color: $red3;
                    text-decoration: none;
                    letter-spacing: 2px;
                    position: relative;
                    text-transform: uppercase;
                    transition: .25s;
                    &.current {
                        color: $blue;
                        text-shadow: 0 0 20px rgba(103, 226, 230, .95);
                    }
                    &:not(.current):hover {
                        color: $red;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        height: 4px;
                        background-color: $blue;
                        box-shadow: 0 0 15px $blue;
                        bottom: -4px;
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
