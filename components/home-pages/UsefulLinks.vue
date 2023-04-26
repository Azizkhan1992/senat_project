<template>
    <section class="useful_links_section">
        <div class="useful_links_container commonContent">
            <div class="links_header">
                <h2 class="mainP">{{ $t('useful_links') }}</h2>
            </div>

            <div class="link_details">
                <div class="link_items" v-for="link in links" :key="link.id" @click="goToSite(link.link)">
                    <div class="link_items_title">
                        <div class="link_image_wrapper">
                            <img :src="require('../../static/images/' + link.img)" alt="">
                        </div>

                        <div class="link_title">
                            <h3 class="commonP">{{ link.title?.[$i18n.locale] }}</h3>
                        </div>
                    </div>

                    <div class="link_name">
                        <img src="../../static/images/sign.svg" alt="">
                        <p class="commonP">{{ link.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="usefull__links__slider commonContent">
            <div class="links_header">
                <h2 class="mainP">{{ $t('useful_links') }}</h2>
            </div>
            <div class="links__slider">
                <swiper :slides-per-view="2" :space-between="15" :autoplay="true" loop :navigation="true"
                    :pagination="false" ref="swiperTag">
                    <swiper-slide v-for="slide in links" :key="slide.id" class="test" :class="{ test_2: true }">

                        <div class="link_items_title">
                            <div class="link_image_wrapper">
                                <img :src="require('../../static/images/' + slide.img)" alt="">
                            </div>

                            <div class="link_title">
                                <h3 class="commonP">{{ slide.title?.[$i18n.locale] }}</h3>
                            </div>
                        </div>

                        <div class="link_name" @click="goToSite(slide.link)">
                            <img src="../../static/images/sign.svg" alt="">
                            <p class="commonP">{{ slide.name }}</p>
                        </div>

                    </swiper-slide>

                </swiper>
            </div>
        </div>
    </section>
</template>
<script>
import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper'

import {
    SwiperCore,
    Swiper,
    SwiperSlide
} from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
    name: 'usefull-links',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            links: this.$store.state.usefulSites
        }
    },
    methods: {
        goToSite(link) {
            window.open(link, '_blank')
        }
    }
}
</script>