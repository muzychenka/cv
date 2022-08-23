<template>
    <div class="logo-wrapper">
        <Icon class="logo" name="web" />
    </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

.logo-wrapper {
    width: 7rem;
    height: 7rem;
    backdrop-filter: blur($blur);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    .logo {
        width: 3.5rem;
        height: 3.5rem;
    }
    @include non-desktop {
        display: none;
    }
}
</style>
