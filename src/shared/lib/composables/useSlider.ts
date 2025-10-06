import { NAVIGATION_LINKS } from '@/shared/lib'

export function useSlider() {
    const route = useRoute()
    const router = useRouter()

    function slideLeft() {
        const index = getViewIndex()
        router.push(NAVIGATION_LINKS[!index ? NAVIGATION_LINKS.length - 1 : index - 1]!.path)
    }

    function slideRight() {
        const index = getViewIndex()
        router.push(NAVIGATION_LINKS[index === NAVIGATION_LINKS.length - 1 ? 0 : index + 1]!.path)
    }

    function getViewIndex() {
        let result = 0

        for (const [index, link] of NAVIGATION_LINKS.entries()) {
            if (link.routeName === (route.name as string).split('__')[0]) {
                result = index
                break
            }
        }

        return result
    }

    return {
        slideLeft,
        slideRight
    }
}
