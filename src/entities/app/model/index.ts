const isAppLoaded = ref(false)
const preloadedImages = ref<
    {
        name: string
        path: string
        image: HTMLImageElement
        isLoaded: boolean | undefined
    }[]
>([])

export function useAppStore() {
    function setAppLoaded(state: boolean) {
        isAppLoaded.value = state
    }

    function setPreloadedImages(images: typeof preloadedImages.value) {
        preloadedImages.value = images
    }

    function getCachedImage(name: string) {
        return preloadedImages.value.find((image) => image.name === name)?.image
    }

    return {
        setAppLoaded,
        setPreloadedImages,

        getCachedImage,

        isAppLoaded,
        preloadedImages
    }
}
