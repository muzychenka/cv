import type { IImage } from '@/constants/images'

interface IPreloadedImage extends IImage {
    image: HTMLImageElement
    isLoaded: boolean | undefined
}

const isAppLoaded = ref(false)
const preloadedImages = ref<IPreloadedImage[]>([])

export function useAppStore() {
    function setAppLoaded(state: boolean) {
        isAppLoaded.value = state
    }

    function setPreloadedImages(images: IPreloadedImage[]) {
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
