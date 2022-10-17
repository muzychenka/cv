<template>
    <div class="experience">
        <h1 class="experience__title page-title" ref="title">&#8203;</h1>
        <article class="experience__article">There are some examples of my experience with short descriptions. I have much more projects but I can't share them because it's forbidden.</article>
        <div class="article-wrapper">
            <h2 class="article-wrapper__title title" ref="website-1">&#8203;</h2>
            <article class="article-wrapper__article article">
                Store for women's clothing. There was a landing page on the main domain, which I made separately from the main store. 
                The online store itself was on a subdomain. The functionality included two admin panels 
                (admin panel for landing and online store), creating and editing categories, subcategories, products, uploading images, 
                Google Analytics. Frontend was made on 
                <router-link class="article__link" to="/skills">HTML</router-link>, 
                <router-link class="article__link" to="/skills">CSS</router-link>, 
                <router-link class="article__link" to="/skills">JS</router-link>. 
                Backend works on <router-link class="article__link" to="/skills">PHP</router-link> and 
                <router-link class="article__link" to="/skills">MySQL</router-link>.
            </article>
        </div>
        <div class="article-wrapper">
            <h2 class="article-wrapper__title title" ref="website-2">&#8203;</h2>
            <article class="article-wrapper__article article">
                Women's clothing store aimed at European audience. The functionality included an admin panel for creating and editing 
                categories, subcategories, products, uploading images, Google analytics was connected. The frontend was written in 
                <router-link class="article__link" to="/skills">Vue</router-link> using 
                <router-link class="article__link" to="/skills">SASS</router-link>, 
                <router-link class="article__link" to="/skills">Vuex</router-link> and standard routing, 
                backend based on <router-link class="article__link" to="/skills">Node.js</router-link> and 
                <router-link class="article__link" to="/skills">MySQL</router-link> database.
            </article>
        </div>
        <div class="article-wrapper">
            <h2 class="article-wrapper__title title" ref="website-3">&#8203;</h2>
            <article class="article-wrapper__article article">
                Online lottery. Creating accounts, online ticket purchase, participation in draws, as well as an admin panel was implemented. 
                The frontend built using <router-link class="article__link" to="/skills">Vue</router-link>, 
                <router-link class="article__link" to="/skills">Vuex</router-link> and 
                <router-link class="article__link" to="/skills">SASS</router-link>. 
                Backend was written using <router-link class="article__link" to="/skills">Node.js</router-link> 
                and <router-link class="article__link" to="/skills">MySQL</router-link>.
            </article>
        </div>
        <div class="article-wrapper">
            <h2 class="article-wrapper__title title" ref="website-4">&#8203;</h2>
            <article class="article-wrapper__article article">
                Website for pet shelter. There were some pages made with <router-link class="article__link" to="/skills">Vue</router-link>, 
                <router-link class="article__link" to="/skills">Vuex</router-link>. Contains static information.
            </article>
        </div>
        <div class="article-wrapper">
            <h2 class="article-wrapper__title title" ref="website-5">&#8203;</h2>
            <article class="article-wrapper__article article">Some other experience and about 1.5 years of working in LLC company. NDA :(</article>
        </div>
    </div>
</template>

<script>
import parsingMixin from '@/mixins/parsing'

export default {
  mounted () {
    this.parseText(this.$refs.title, 'EXPERIENCE')
    const titles = ['ONLINE STORE', 'EUROPEAN CLOTHES STORE', 'ONLINE LOTTERY', 'PETS SHELTER', 'AND ALSO...']
    titles.forEach((title, index) => this.parseText(this.$refs['website-' + (index + 1)], title))
  },
  mixins: [parsingMixin]
}
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/screens.scss';

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
