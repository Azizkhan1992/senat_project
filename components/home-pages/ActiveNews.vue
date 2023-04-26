<template>
    <div class="active_news">
        <a-row type="flex" :gutter="[24, 24]">
            <a-col :xs="24" :sm="8" :lg="8" :xl="8" :xxl="8" v-for="(item, idx) in activeNews" :key="item.id">
                <nuxt-link class="active_news_items" data-aos="flip-right" data-aos-easing="ease-in-quart" :data-aos-duration="duration[idx]" :to="`/events/${item.slug}`" >
            <div class="news_img_wrapper">
                <img v-if="item?.image" :src="item?.image" alt="">
                <img v-else src="../../static/images/gerb.svg" alt="" style="object-fit: contain;">
            </div>

            <div class="news_details_wrapper">
                <h3 class="descP title_box">{{ item?.short_content}}</h3>
                <p class="desc_box">{{ item?.title}}</p>

                <div class="news_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item?.pub_date }}</span>
                </div>
            </div>
        </nuxt-link>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'active-news',
    props:{
        news: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            activeNews: [],
            duration: [200, 500, 800]
        }
    },
    mounted(){
        if(this.news?.length>0){
            this.activeNews = this.news
        }
    }
}
</script>