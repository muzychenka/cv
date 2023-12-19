export interface INavigationLink {
    path: string
    name: string
}

export const NAVIGATION_LINKS: INavigationLink[] = [
    {
        path: '',
        name: 'About me'
    },
    {
        path: 'experience',
        name: 'Experience'
    },
    {
        path: 'skills',
        name: 'Skills'
    }
]