<script setup lang="ts">
import { skillsEnum } from '@/shared/lib/constants/skills'
import { SKILLS } from '@/shared/lib/constants/skills'
import {
    DockerIcon,
    GitIcon,
    HtmlIcon,
    JsIcon,
    NuxtIcon,
    PageTitle,
    ReactIcon,
    SkillCard,
    TsIcon,
    VueIcon,
    CssIcon,
    VagrantIcon,
    SassIcon,
    NodejsIcon,
    WebpackIcon,
    JiraIcon,
    UbuntuIcon,
    MysqlIcon,
    RestIcon
} from '@/shared/ui'

const { t } = useI18n()

useHead({
    title: computed(() => t('skills.title')),
    meta: [
        {
            name: 'description',
            content:
                'Frontend Developer (Vue, Nuxt, React, TypeScript). DevOps skills: Docker, Vagrant, Ubuntu. Tools: Git, Webpack, Jira. View my technical skill set.'
        }
    ]
})

const icons = computedEager(() => ({
    [skillsEnum.enum.vue]: markRaw(VueIcon),
    [skillsEnum.enum.nuxt]: markRaw(NuxtIcon),
    [skillsEnum.enum.ts]: markRaw(TsIcon),
    [skillsEnum.enum.react]: markRaw(ReactIcon),
    [skillsEnum.enum.git]: markRaw(GitIcon),
    [skillsEnum.enum.js]: markRaw(JsIcon),
    [skillsEnum.enum.html]: markRaw(HtmlIcon),
    [skillsEnum.enum.css]: markRaw(CssIcon),
    [skillsEnum.enum.docker]: markRaw(DockerIcon),
    [skillsEnum.enum.vagrant]: markRaw(VagrantIcon),
    [skillsEnum.enum.sass]: markRaw(SassIcon),
    [skillsEnum.enum.nodejs]: markRaw(NodejsIcon),
    [skillsEnum.enum.webpack]: markRaw(WebpackIcon),
    [skillsEnum.enum.jira]: markRaw(JiraIcon),
    [skillsEnum.enum.ubuntu]: markRaw(UbuntuIcon),
    [skillsEnum.enum.mysql]: markRaw(MysqlIcon),
    [skillsEnum.enum.rest]: markRaw(RestIcon)
}))
</script>

<template>
    <div class="skills-page">
        <page-title
            :key="t('skills.page-title')"
            :text="t('skills.page-title')"
        />
        <div class="skills-page__cards-wrapper">
            <skill-card
                v-for="skill in SKILLS"
                :key="skill.name"
                :name="skill.name"
                :icon="icons[skill.icon]"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;

    @include desktop {
        padding: 4rem 11rem 7rem 11rem;
        margin-top: 6.5rem;
    }

    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }

    &__cards-wrapper {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        row-gap: 3rem;
        justify-items: center;

        @include tablet {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        @include mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
</style>
