import { NAVIGATION_LINKS } from '@/constants/navigation'

export function slideLeft () {
    const index = getViewIndex()
    const router = useRouter()

    router.push('/' + NAVIGATION_LINKS[!index ? NAVIGATION_LINKS.length - 1 : index - 1].path)
}

export function slideRight () {
    const index = getViewIndex()
    const router = useRouter()
    
    router.push('/' + NAVIGATION_LINKS[index === NAVIGATION_LINKS.length - 1 ? 0 : index + 1].path)
}

export function getViewIndex () {
    let result: number = 0
    const route = useRoute()
    
    for (const [index, link] of NAVIGATION_LINKS.entries()) {
        if ('/' + link.path === route.path) {
            result = index
            break
        }
    }

    return result
}