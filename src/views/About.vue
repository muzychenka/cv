<template>
    <div class="about">
        <h1 class="page-title" ref="title-1">&#8203;</h1>
        <div class="about__wrapper">
            <div class="preview-wrapper">
                <img class="preview-wrapper__photo" ref="photo" :src="glitchedPhoto" />
                <div class="preview-wrapper__description-wrapper">
                    <div class="preview-wrapper__description-filler">
                        <table class="info">
                            <tr class="info__element" v-for="(data) of profile" :key="'profile-data-' + data.field">
                                <td class="info__field">{{ data.field }}</td>
                                <td class="info__value">{{ data.value }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="description">
                <h2 class="description__title title" ref="title-2">&#8203;</h2>
                <article class="description__article">
                  My name is Dmitry. I was born in Minsk, Belarus.<br>
                  I have been working as a developer for three years. I love learning new things and I learn quickly.<br>
                  I started my development journey by creating game servers when I studied at school.<br>
                  I've studied English with a teacher. My current level is B2.
                </article>
                <h2 class="description__title title" ref="title-3">&#8203;</h2>
                <article class="description__article">Most of all I like to play video games (as you can see from the style of this website). I also go in for sports, I like evening walks, cooking, and also nightly programming.</article>
                <h2 class="description__title title" ref="title-4">&#8203;</h2>
                <article class="description__article">It's my financial code. Some guys told me that it's my lucky number and I should use it everywhere.</article>
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
    const titles = ['CASE №7738', 'MAIN', 'HOBBIES', 'WHAT IS 7738?']
    titles.forEach((title, index) => this.parseText(this.$refs['title-' + (index + 1)], title))
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
        margin-top: 6.5rem;
    }
    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }
    &__wrapper {
        display: flex;
        align-items: flex-start;
        @include mobile {
            flex-direction: column;
        }
        .preview-wrapper {
            display: flex;
            flex-direction: column;
            @include non-desktop {
                width: 100%;
            }
            &__photo {
                border: 2px solid $red;
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
            &__description-wrapper {
                width: 100%;
                height: 8rem;
                background-color: $red;
                clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
                position: relative;
            }
            &__description-filler {
                position: absolute;
                left: 2px;
                right: 2px;
                bottom: 2px;
                top: 0;
                background-color: rgb(29,27,32);
                font-family: 'UF1';
                color: white;
                padding: 1.5rem;
                clip-path: polygon(100% 0%, 100% 0, 100% 0, 100% 70%, 90% 100%, 30% 100%, 0 100%, 0 0);
            }
            .info {
                border-spacing: 0;
                width: 100%;
                padding: 0;
                margin: 0;
                list-style: none;
                font-size: 1.25rem;
                &__field {
                    color: $blue;
                    text-shadow: 0 0 20px rgba(103, 226, 230, .45);
                }
                &__value {
                    color: $yellow;
                    text-shadow: 0 0 20px rgba(235,192,59, .45);
                }
            }
        }
        .description {
            display: flex;
            flex-direction: column;
            @include tablet {
                margin-left: 4rem;
            }
            @include desktop {
                margin-left: 4rem;
            }
            &__title {
                font-size: 1.5rem;
                letter-spacing: 2px;
                color: white;
                align-self: flex-start;
                padding: 1rem 2rem;
                border: 2px solid $blue;
                @include tablet {
                    &:first-child {
                        margin-top: 0;
                    }
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
                @include desktop {
                    &:first-child {
                        margin-top: 0;
                    }
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
                @include non-desktop {
                    margin-top: 4rem;
                }
            }
        }
    }
}
</style>
