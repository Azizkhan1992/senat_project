<template>
    <section class="home_news_section">
        <div class="home_news_container commonContent">
            <div class="news_header df-spb">
                <h2 class="mainP">{{ $t('news') }}</h2>

                <nuxt-link to="events" class="descBl">{{ $t('all_news') }}
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                </nuxt-link>
            </div>

            <div class="news_wrapper">
                <a-row type="flex" :gutter="[24, 24]" justify="space-between">
                    <a-col :xs="24" :sm="24" :lg="24" :xl="18" :xxl="18">
                        <div class="active_news_wrapper news">
                            <ActiveNews v-if="activeNews?.length>0" :news="activeNews"/>
                        </div>
                    </a-col>
                    <a-col :xs="24" :sm="24" :lg="24" :xl="6" :xxl="6">
                        <div class="tag_news_wrapper news">
                            <TagNews v-if="tagNews?.length>0" :news="tagNews"/>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>
<script>
import ActiveNews from './ActiveNews.vue';
import TagNews from './TagNews.vue';
export default {
    name: 'home-news',
    components: {ActiveNews, TagNews},
    data(){
        return{
            allNews: [],
            activeNews: [],
            tagNews: []
        }
    },
    mounted(){
        this.getEvents()
    },
    methods: {
        async getEvents(){
            this.allNews = await this.$store.dispatch('getHomeEvents')
            if(this.allNews?.length>0){
                this.activeNews = this.allNews.slice(0, 3)
            this.tagNews = this.allNews.slice(3, this.allNews.length)
            }
        }
    }
}
</script>