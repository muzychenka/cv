import { z } from 'zod'

export const skillsEnum = z.enum(['vue', 'nuxt', 'ts', 'react', 'git', 'js', 'html', 'css', 'docker', 'vagrant', 'sass', 'nodejs', 'webpack', 'jira', 'ubuntu', 'mysql', 'rest'])
export type TSkills = z.infer<typeof skillsEnum>