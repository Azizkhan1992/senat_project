<template>
    <section class="hot_news_section commonContent">
        <TabsWrapper>
                <Tab :id="tab.id" :length="news.length" :name="tab.title" :date="tab.date" :descript="tab.descript" :selected="tab.selected" v-for="(tab, idy) in news" :key="idy">
            <div class="ImgWr">
                <img :src="require('../../static/images/swipe/'+tab?.img)" alt="">
            </div>
            </Tab>
        </TabsWrapper>
    </section>
</template>
<script>
import Tab from '../Tab.vue'
import TabsWrapper from '../TabsWrapper.vue'
export default {
    name: 'hot-news',
    components: {TabsWrapper, Tab},
    data(){
        return{
            news: this.$store.state.hotNews
        }
    }
}
</script>