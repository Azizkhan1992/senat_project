<template>
    <div class="photo_gallery">
        <nuxt-link :to="`photo-gallery/${photo.slug}`" class="photo_gallery_items" v-for="(photo, idy) in photos" :key="idy">
            <div class="photo_image_wrapper">
                <img :src="photo?.image" alt="">

                <div class="circle_play">
                    <font-awesome-icon :icon="['far', 'image']" />
            </div>
            </div>

            <div class="photo_gallery_details">
                <h3 class="descT desc_box">{{ photo.title }}</h3>

                <div class="photo_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ photo.pub_date }}</span>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'photo-gallery',
    data(){
        return{
            photos: []
        }
    },
    mounted(){
        this.getPhotos()
    },
    methods: {
        async getPhotos(){
            let params = {
                limit: 4
            }
            this.photos = await this.$store.dispatch('getHomePhotoGallery', params)
        }
    }
}
</script>