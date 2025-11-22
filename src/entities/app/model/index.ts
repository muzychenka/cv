interface IPreloadedImage {
    name: string
    path: string
    isLoaded: boolean | undefined
}

export function useAppStore() {
    const isAppLoaded = useState('app-loaded', () => shallowRef(false))
    const preloadedImages = useState<IPreloadedImage[]>('preloaded-images', () => [])

    function setAppLoaded(state: boolean) {
        isAppLoaded.value = state
    }

    function addPreloadedImage(state: IPreloadedImage) {
        preloadedImages.value.push(state)
    }

    function setLoaded(index: number, state: boolean | undefined) {
        preloadedImages.value[index]!.isLoaded = state
    }

    function getCachedImage(name: string) {
        return preloadedImages.value.find((data) => data.name === name)
    }

    return {
        setAppLoaded,
        addPreloadedImage,
        setLoaded,
        getCachedImage,

        isAppLoaded: readonly(isAppLoaded),
        preloadedImages: readonly(preloadedImages)
    }
}
