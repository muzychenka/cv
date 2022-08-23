<template>
    <div class="experience">
        <h1 class="page-header" ref="header">&#8203;</h1>
        <article>There are some examples of my experience with short descriptions. I have much more projects but I can't share them because it's forbidden.</article>
        <h2 class="article-header" ref="website-1">&#8203;</h2>
        <article>Store for women's clothing. There was a landing page on the main domain, which I made separately from the main store. The online store itself was on a subdomain. The functionality included two admin panels (admin panel for landing and online store), creating and editing categories, subcategories, products, uploading images, Google Analytics. Frontend was made on HTML, CSS, jQuery. Backend works on PHP and MySQL.</article>
        <h2 class="article-header" ref="website-2">&#8203;</h2>
        <article>Women's clothing store aimed at European audience. The functionality included an admin panel for creating and editing categories, subcategories, products, uploading images, Google analytics was connected. The frontend was written in Vue using SASS, Vuex and standard routing, backend based on Node.js and MySQL database.</article>
        <h2 class="article-header" ref="website-3">&#8203;</h2>
        <article>Online lottery. Creating accounts, online ticket purchase, participation in draws, as well as an admin panel was implemented. The frontend built using Vue, Vuex and SASS. Backend was written using Node.js and MySQL.</article>
        <h2 class="article-header" ref="website-4">&#8203;</h2>
        <article>Website for pet shelter. There were some pages made with Vue, Vuex. Contains static information.</article>
        <div class="other">Some other experience and about 1.5 years of working in LLC company. NDA :(</div>
    </div>
</template>

<script>
import parsingMixin from '@/mixins/parsing'

export default {
  mounted () {
    this.parseText(this.$refs.header, 'EXPERIENCE')
    this.parseText(this.$refs['website-1'], 'ONLINE STORE')
    this.parseText(this.$refs['website-2'], 'EUROPEAN CLOTHES STORE')
    this.parseText(this.$refs['website-3'], 'ONLINE LOTTERY')
    this.parseText(this.$refs['website-4'], 'PETS SHELTER')
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
        margin-top: 7rem;
    }
    @include non-desktop {
        padding: 2rem;
        margin: 8rem 0 5rem;
    }
    article:not(:last-child) {
        margin-bottom: 2rem;
    }
    .article-header {
        font-size: 1.5rem;
        letter-spacing: 2px;
        color: white;
    }
    .other {
        margin-top: 2rem;
        font-size: 1.25rem;
        color: $gray;
        letter-spacing: 2px;
    }
}
</style>
