<template>
    <div class="active_news">
        <a-row type="flex" :gutter="[24, 24]">
            <a-col :xs="24" :sm="24" :lg="8" :xl="8" :xxl="8" v-for="(item, idx) in news" :key="item.id">
                <nuxt-link class="active_news_items" data-aos="flip-right" data-aos-easing="ease-in-quart" :data-aos-duration="duration[idx]" :to="`/events/${item.id}`" >
            <div class="news_img_wrapper">
                <img :src="require('../../static/images/events/'+item.img)" alt="">
            </div>

            <div class="news_details_wrapper">
                <h3 class="descP title_box">{{ item.title?.[$i18n.locale] }}</h3>
                <p class="desc_box">{{ item.descript?.[$i18n.locale] }}</p>

                <div class="news_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item.date }}</span>
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
    data(){
        return{
            news: this.$store.state.events.slice(0, 3),
            duration: [200, 500, 800]
        }
    }
}
</script>