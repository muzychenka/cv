<template>
    <div class="experience">
        <h1
            id="title"
            class="experience__title page-title"
        >
            &#8203;
        </h1>
        <article class="experience__article">
            There are some examples of my experience with short descriptions. I have much more projects but I can't share them because it's forbidden.
        </article>
        <div class="article-wrapper">
            <h2
                id="website-1"
                class="article-wrapper__title title"
            >
                &#8203;
            </h2>
            <article class="article-wrapper__article article">
                Store for women's clothing. There was a landing page on the main domain, which I made separately from the main store. 
                The online store itself was on a subdomain. The functionality included two admin panels 
                (admin panel for landing and online store), creating and editing categories, subcategories, products, uploading images, 
                Google Analytics. Frontend was made on 
                <NuxtLink class="article__link" to="/skills">HTML</NuxtLink>, 
                <NuxtLink class="article__link" to="/skills">CSS</NuxtLink>, 
                <NuxtLink class="article__link" to="/skills">JS</NuxtLink>. 
                Backend works on <NuxtLink class="article__link" to="/skills">Node.js</NuxtLink> and 
                <NuxtLink class="article__link" to="/skills">MySQL</NuxtLink>.
            </article>
        </div>
        <div class="article-wrapper">
            <h2
                id="website-2"
                class="article-wrapper__title title"
            >
                &#8203;
            </h2>
            <article class="article-wrapper__article article">
                Women's clothing store aimed at European audience. The functionality included an admin panel for creating and editing 
                categories, subcategories, products, uploading images, Google analytics was connected. The frontend was written in 
                <NuxtLink class="article__link" to="/skills">Vue</NuxtLink> using 
                <NuxtLink class="article__link" to="/skills">SASS</NuxtLink>, 
                <NuxtLink class="article__link" to="/skills">Vuex</NuxtLink> and standard routing, 
                backend based on <NuxtLink class="article__link" to="/skills">Node.js</NuxtLink> and 
                <NuxtLink class="article__link" to="/skills">MySQL</NuxtLink> database.
            </article>
        </div>
        <div class="article-wrapper">
            <h2
                id="website-3"
                class="article-wrapper__title title"
            >
                &#8203;
            </h2>
            <article class="article-wrapper__article article">
                Online lottery. Creating accounts, online ticket purchase, participation in draws, as well as an admin panel was implemented. 
                The frontend built using <NuxtLink class="article__link" to="/skills">Vue</NuxtLink>, 
                <NuxtLink class="article__link" to="/skills">Vuex</NuxtLink> and 
                <NuxtLink class="article__link" to="/skills">SASS</NuxtLink>. 
                Backend was written using <NuxtLink class="article__link" to="/skills">Node.js</NuxtLink> 
                and <NuxtLink class="article__link" to="/skills">MySQL</NuxtLink>.
            </article>
        </div>
        <div class="article-wrapper">
            <h2
                id="website-4"
                class="article-wrapper__title title"
            >
                &#8203;
            </h2>
            <article class="article-wrapper__article article">
                Website for pet shelter. There were some pages made with <NuxtLink class="article__link" to="/skills">Vue</NuxtLink>, 
                <NuxtLink class="article__link" to="/skills">Vuex</NuxtLink>. Contains static information.
            </article>
        </div>
        <div class="article-wrapper">
            <h2
                id="website-5"
                class="article-wrapper__title title"
            >
                &#8203;
            </h2>
            <article class="article-wrapper__article article">Much more experience and 3+ years of working in companies. NDA :(</article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EXPERIENCE_TITLES } from '@/constants/experience'

useHead({
    title: 'Experience'
})

onMounted(() => {
    parseText(document.getElementById('title'), 'EXPERIENCE')
    for (const [index, title] of EXPERIENCE_TITLES.entries()) {
        parseText(document.getElementById(`website-${index + 1}`), title)
    }
})
</script>

<style lang="scss">
.experience {
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
    .article-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        .article {
            &__link {
                color: $blue;
                text-shadow: 0 0 20px $blue;
                text-decoration: none;
            }
        }
        &__title {
            font-size: 1.5rem;
            letter-spacing: 2px;
            color: white;
            align-self: flex-start;
            padding: 1rem 2rem;
            border: 2px solid $blue;
        }
    }
}
</style>
