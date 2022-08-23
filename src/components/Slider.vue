<template>
    <div class="buttons-wrapper">
        <button @click="slideLeft" class="left"><Icon name="arrow" /></button>
        <button @click="slideRight" class="right"><Icon name="arrow" /></button>
    </div>
</template>

<script>
import Icon from '@/components/Icon'
import sliderMixin from '@/mixins/slider'

export default {
  components: {
    Icon
  },
  mixins: [sliderMixin]
}
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/screens.scss';

.buttons-wrapper {
    position: fixed;
    right: 4rem;
    bottom: 4rem;
    z-index: 100;
    @include non-desktop {
        display: none;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        padding: 2rem 1.75rem;
        clip-path: polygon(30% 0%, 73% 0, 100% 0, 100% 90%, 80% 100%, 30% 100%, 0 100%, 0 0);
        border: none;
        cursor: pointer;
        transition: .25s;
        svg {
            width: 1.75rem;
            height: 1.75rem;
        }
    }
    .left {
        transform: rotate(180deg);
        background-color: rgba(0, 0, 0, .65);
        backdrop-filter: blur($blur);
        &:active,
        &:hover {
            background-color: rgba(0, 0, 0, 1);
        }
    }
    .right {
        background-color: transparent;
        background-position: center;
        background-size: 20px;
        background-color: $red;
        &:active,
        &:hover {
            background-color: red;
        }
    }
}
</style>
