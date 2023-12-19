import type { TSocials } from '~/enums/social'
import { socialsEnum } from '~/enums/social'

export interface ISocialLink {
    name: TSocials
    url: string
}

export const SOCIAL_LINKS: ISocialLink[] = [
    {
        name: socialsEnum.enum.linkedin,
        url: 'https://www.linkedin.com/in/d-muzychenko/'
    },
    {
        name: socialsEnum.enum.github,
        url: 'https://github.com/musicchenko'
    },
    {
        name: socialsEnum.enum.telegram,
        url: 'https://t.me/dmdevel'
    },
    {
        name: socialsEnum.enum.instagram,
        url: 'https://www.instagram.com/ligmaballszz/'
    }
]