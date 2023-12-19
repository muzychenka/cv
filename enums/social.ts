import { z } from 'zod'

export const socialsEnum = z.enum(['linkedin', 'github', 'telegram', 'instagram'])
export type TSocials = z.infer<typeof socialsEnum>