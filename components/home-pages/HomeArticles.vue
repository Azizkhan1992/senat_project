<template>
    <section class="home_articles_section">
        <div class="home_articles_container commonContent">
            <div class="articles_header df-spb">
                <h2 class="mainP">{{ $t('articles') }}</h2>

                <nuxt-link to="#" class="descP">{{ $t('all_articles') }}</nuxt-link>
            </div>

            <div class="articles_wrapper">
                <nuxt-link :to="`/articles/${article?.slug}`" data-aos="flip-left" :data-aos-duration="`${duration[idx]}`"
                    data-aos-easing="ease-out-cubic" class="article_items" v-for="(article, idx) in articles" :key="idx">
                    <h3 class="descP">{{ article?.title }}</h3>

                    <div class="article_date_wrapper">
                        <font-awesome-icon :icon="['far', 'clock']" />
                        <span class="commonP">{{ article?.pub_date }}</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-articles',
    data() {
        return {
            articles: [],
            duration: [100, 400, 700, 1000,
                100, 400, 700, 1000
            ]
        }
    },
    mounted(){
        this.getArticles()
    },
    methods: {
        async getArticles(){
            this.articles = await this.$store.dispatch('getHomeArticles')
        }
    }
}
</script>