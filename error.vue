<template>
    <NuxtLayout>
        <div class="error">
            <h2 class="error__title page-title">404</h2>
            <div class="error__message">Sorry but this page doesn't exist</div>
        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.error {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    &__title {
        font-size: 3rem;
        color: $blue;
        margin-top: 0;
        text-shadow: 0 0 50px rgba(103, 226, 230, 1);
        @include desktop {
            font-size: 5rem;
        }
    }
    &__message {
        font-size: 2rem;
        font-weight: 600;
        color: $red;
        text-shadow: 0 0 50px rgba(196, 30, 37, 1);
    }
}
</style>