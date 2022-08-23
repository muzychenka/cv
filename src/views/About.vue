<template>
    <div class="about">
        <h1 class="page-header" ref="header">&#8203;</h1>
        <div class="card">
            <div class="photo-wrapper">
                <img class="photo" ref="photo" :src="glitchedPhoto" />
                <div class="description">
                    <table class="info">
                        <tr v-for="n in profile.length" :key="n">
                            <td>{{ profile[n - 1].field }}</td>
                            <td>{{ profile[n - 1].value }}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="texts">
                <h1 ref="main" class="article-header">&#8203;</h1>
                <article>
                  My name is Dmitry. I was born in Minsk, Belarus.<br>
                  I have been working as a developer for three years. I love learning new things and I learn quickly.<br>
                  I started my development journey by creating game servers when I studied at school.<br>
                  I've studied English with a teacher. My current level is B2.
                </article>
                <h1 ref="hobbies" class="article-header">&#8203;</h1>
                <article>Most of all I like to play video games (as you can see from the style of this website). I also go in for sports, I like evening walks, cooking, and also nightly programming.</article>
                <h1 ref="code" class="article-header">&#8203;</h1>
                <article>It's my financial code. Some guys told me that it's my lucky number and I should use it everywhere.</article>
            </div>
        </div>
    </div>
</template>

<script>
import parsingMixin from '@/mixins/parsing'
import cacheMixin from '@/mixins/cache'

export default {
  data () {
    return {
      glitched: true,
      glitchTimeout: null,
      glitchInterval: null
    }
  },
  beforeDestroy () {
    clearInterval(this.glitchTimeout)
    clearInterval(this.glitchInterval)
  },
  mounted () {
    this.parseText(this.$refs.header, 'CASE №7738')
    this.parseText(this.$refs.main, 'MAIN')
    this.parseText(this.$refs.hobbies, 'HOBBIES')
    this.parseText(this.$refs.code, 'WHAT IS 7738?')
    this.glitchTimeout = setTimeout(_ => {
      this.glitched = false
      this.$refs.photo.src = this.defaultPhoto
      this.glitchInterval = setInterval(_ => {
        if (this.glitched) this.$refs.photo.src = this.defaultPhoto
        else this.$refs.photo.src = this.glitchedPhoto
        this.glitched = !this.glitched
      }, 6000)
    }, 1500)
  },
  computed: {
    profile () {
      return this.$store.state.profile.data
    },
    glitchedPhoto () {
      return this.getCachedImage('glitchedPhoto').src
    },
    defaultPhoto () {
      return this.getCachedImage('defaultPhoto').src
    }
  },
  mixins: [parsingMixin, cacheMixin]
}
</script>

<style lang="scss" scoped>
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

.about {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    @include desktop {
        padding: 4rem 11rem 7rem 11rem;
        margin-top: 7rem;
    }
    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }
    .card {
        display: flex;
        align-items: flex-start;
        @include mobile {
            flex-direction: column;
        }
        .photo-wrapper {
            display: flex;
            flex-direction: column;
            @include non-desktop {
                width: 100%;
            }
            .photo {
                border: 1px solid $red2;
                display: flex;
                box-sizing: border-box;
                @include mobile {
                    width: 100%;
                    height: 100%;
                }
                @include tablet {
                    width: 344px;
                    height: 512px;
                }
                @include desktop {
                    width: 344px;
                    height: 512px;
                }
                user-select: none;
            }
            .description {
                background-color: $red2;
                font-family: 'UF1';
                color: white;
                padding: 1.5rem;
                clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
                .info {
                    border-spacing: 0;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    font-size: 1.25rem;
                    tr {
                        td:nth-child(2) {
                            color: $gray;
                        }
                    }
                }
            }
        }
        .texts {
            display: flex;
            flex-direction: column;
            @include mobile {
                margin-top: 2rem;
            }
            @include tablet {
                margin-left: 4rem;
            }
            @include desktop {
                margin-left: 4rem;
            }
            .article-header {
                margin-bottom: 1.5rem;
                &:first-child {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>
