<template>
    <div class="active_news">
        <nuxt-link class="active_news_items" data-aos="flip-right" data-aos-easing="ease-in-quart" data-aos-duration="400" to="#" v-for="item in news" :key="item.id">
            <div class="news_img_wrapper">
                <img :src="require('../../static/images/'+item.img)" alt="">
            </div>

            <div class="news_details_wrapper">
                <h3 class="descP title_box">{{ item.title?.[$i18n.locale] }}</h3>
                <p class="desc_box">{{ item.descript?.[$i18n.locale] }}</p>

                <div class="news_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item.date?.[$i18n.locale] }}</span>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'active-news',
    data(){
        return{
            news: this.$store.state.news
        }
    }
}
</script>