import { imagesEnum } from '~/enums/images'
import type { TImages } from '~/enums/images'

export const GLITCH_INTERVAL = 6000
export const GLITCH_INITIAL_TIMEOUT = 1500

export interface IImage {
    name: TImages
    path: string
}

export const IMAGES: IImage[] = [
    {
        name: imagesEnum.enum.glitchedPhoto,
        path: './img/me.gif'
    },
    {
        name: imagesEnum.enum.defaultPhoto,
        path: './img/me.jpg'
    }
]