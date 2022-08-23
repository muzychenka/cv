<template>
    <div class="skills">
        <h1 class="page-header" ref="header">&#8203;</h1>
        <div class="cards-wrapper">
            <div v-for="n in skills.length" :key="n" class="card" :name="skills[n - 1].name">
                <Icon class="icon" :name="skills[n - 1].icon" />
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon'
import parsingMixin from '@/mixins/parsing'

export default {
  mounted () {
    this.parseText(this.$refs.header, 'SKILLS')
  },
  computed: {
    skills () {
      return this.$store.state.profile.skills
    }
  },
  mixins: [parsingMixin],
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

.skills {
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
    .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        .card {
            width: 12rem;
            height: 12rem;
            @include mobile {
                width: calc(50vw - 3.4rem);
                height: calc(50vw - 3.4rem);
            }
            @include tablet {
                width: calc(33vw - 2.8rem);
                height: calc(33vw - 2.8rem);
            }
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $red2;
            background-color: $red2-transparent;
            backdrop-filter: blur($blur);
            position: relative;
            transition: .25s;
            &:active,
            &:hover {
                &:before {
                    width: 100%;
                    background-color: $red;
                }
                &:after {
                    background-color: $red;
                }
                border-color: $red;
            }
            &:before {
                content: "";
                display: flex;
                height: 2px;
                background-color: $red2;
                position: absolute;
                width: 50%;
                box-sizing: border-box;
                bottom: -.7rem;
                transition: .25s;
            }
            &:after {
                content: attr(name);
                justify-content: flex-end;
                letter-spacing: 2px;
                font-size: 1rem;
                color: white;
                background-color: $red2;
                display: flex;
                position: absolute;
                padding: .25rem .5rem;
                bottom: -0rem;
            }
            .icon {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    width: 50%;
                    height: 50%;
                }
            }
        }
    }
}
</style>
