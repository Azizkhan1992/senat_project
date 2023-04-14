<template>
    <div class="tag_news">
        <nuxt-link to="#" class="tag_news_items" data-aos="fade-up" data-aos-easing="ease-in-quart" :data-aos-duration="duration[idx]" v-for="(item, idx) in news" :key="item.id">
            <div class="tag_img_wrapper">
                <img :src="require('../../static/images/'+item.img)" alt="">
            </div>
            <div class="tag_details">
                <div class="tag_data">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item.date?.[$i18n.locale] }}</span>
                </div>

                <h3 class="descP">{{ item.title?.[$i18n.locale] }}</h3>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'tag-news',
    data(){
        return{
            news: this.$store.state.tagNews,
            duration: [200, 400, 600]
        }
    }
}
</script>