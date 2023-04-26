<template>
    <div class="tag_news">
        <nuxt-link :to="`/events/${item.slug}`" class="tag_news_items" data-aos="fade-up" data-aos-easing="ease-in-quart" :data-aos-duration="duration[idx]" v-for="(item, idx) in tagNews" :key="item.id">
            <div class="tag_img_wrapper">
                <img v-if="item?.image" :src="item.image" alt="">
                <img v-else src="../../static/images/gerb.svg" alt="">
            </div>
            <div class="tag_details">
                <div class="tag_data">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item.pub_date }}</span>
                </div>

                <h3 class="descP">{{ item?.title }}</h3>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'tag-news',
    props: {
        news: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            tagNews: [],
            duration: [200, 400, 600]
        }
    },
    mounted(){
        if(this.news?.length>0){
            this.tagNews = this.news
        }
    }
}
</script>