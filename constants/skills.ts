import type { TSkills } from '~/enums/skills'
import { skillsEnum } from '~/enums/skills'

export interface ISkill {
    name: string
    icon: TSkills
}

export const SKILLS: ISkill[] = [
    {
        name: 'Vue.js',
        icon: skillsEnum.enum.vue
    },
    {
        name: 'Nuxt',
        icon: skillsEnum.enum.nuxt
    },
    {
        name: 'TypeScript',
        icon: skillsEnum.enum.ts
    },
    {
        name: 'React.js',
        icon: skillsEnum.enum.react
    },
    {
        name: 'Git',
        icon: skillsEnum.enum.git
    },
    {
        name: 'JavaScript',
        icon: skillsEnum.enum.js
    },
    {
        name: 'HTML5',
        icon: skillsEnum.enum.html
    },
    {
        name: 'CSS3',
        icon: skillsEnum.enum.css
    },
    {
        name: 'Docker',
        icon: skillsEnum.enum.docker
    },
    {
        name: 'Vagrant',
        icon: skillsEnum.enum.vagrant
    },
    {
        name: 'SASS',
        icon: skillsEnum.enum.sass
    },
    {
        name: 'Node.js',
        icon: skillsEnum.enum.nodejs
    },
    {
        name: 'Webpack',
        icon: skillsEnum.enum.webpack
    },
    {
        name: 'Jira',
        icon: skillsEnum.enum.jira
    },
    {
        name: 'Ubuntu',
        icon: skillsEnum.enum.ubuntu
    },
    {
        name: 'MySQL',
        icon: skillsEnum.enum.mysql
    },
    {
        name: 'REST',
        icon: skillsEnum.enum.rest
    }
]