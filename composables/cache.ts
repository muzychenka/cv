export function getCachedImage (name: string) {
    const appStore = useAppStore()
    const element = appStore.preloadedImages.value.find(image => image.name === name)

    return element ? element.image : undefined
}