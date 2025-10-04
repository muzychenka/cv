import { z } from 'zod'

export const socialsEnum = z.enum(['linkedin', 'github', 'telegram', 'instagram'])

export const SOCIAL_LINKS = [
    {
        name: socialsEnum.enum.linkedin,
        url: 'https://www.linkedin.com/in/muzychenka'
    },
    {
        name: socialsEnum.enum.github,
        url: 'https://github.com/muzychenka'
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
