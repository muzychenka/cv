import type { IImage } from '@/constants/images'

interface IPreloadedImage extends IImage {
    image: HTMLImageElement
    isLoaded: boolean | undefined
}

const isAppLoaded = ref(false)
const preloadedImages = ref<IPreloadedImage[]>([])

export function useAppStore () {
    return {
        isAppLoaded,
        preloadedImages
    }
}