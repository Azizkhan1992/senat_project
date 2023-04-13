<template>
    <div class="video_gallery">
        <div class="video_gallery_items" v-for="(item, idx) in gallery" :key="idx" @click="play(item.id)">
            <div class="items_wrapper" v-if="item.id !== active_play">
                <div class="gallery_image_wrapper">
                <img :src="require('../../static/images/'+item.img)" alt="">

                <div class="circle_play">
                <font-awesome-icon :icon="['fasr', 'play']" />
            </div>
            </div>

            <div class="video_gallery_details">
                <h3 class="descT">{{ item.title?.[$i18n.locale] }}</h3>

                <div class="video_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ item.date?.[$i18n.locale] }}</span>
                </div>
            </div>
            </div>

            <VideosPopup :isPlaying="isPlaying" @close="close" v-if="isPlaying && item.id === active_play">
            <iframe :src="`${item.link}`" width="100%" height="100%" style="border: none"></iframe>
        </VideosPopup>
        </div>

        
    </div>
</template>
<script>
import VideosPopup from '../modals/VideosPopup.vue'
export default {
    name: 'video-gallery',
    components: {VideosPopup},
    data(){
        return{
            gallery: this.$store.state.videoGallery,
            isPlaying: false,
            active_play: null
        }
    },
    methods: {
        play(id){
            this.isPlaying = true
            this.active_play = id
        },
        close(){
            this.isPlaying = false
            this.active_play = null
        }
    }
}
</script>