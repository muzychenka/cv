import { z } from 'zod'

export const eImages = z.enum(['glitchedPhoto', 'defaultPhoto'])

export const GLITCH_INTERVAL = 6000
export const GLITCH_INITIAL_TIMEOUT = 1500

export const IMAGES = [
    {
        name: eImages.enum.glitchedPhoto,
        path: '/img/me.gif'
    },
    {
        name: eImages.enum.defaultPhoto,
        path: '/img/me.jpg'
    }
]
