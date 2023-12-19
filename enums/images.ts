import { z } from 'zod'

export const imagesEnum = z.enum(['glitchedPhoto', 'defaultPhoto'])
export type TImages = z.infer<typeof imagesEnum>