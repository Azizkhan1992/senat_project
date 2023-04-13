<template>
    <div class="photo_gallery">
        <nuxt-link to="#" class="photo_gallery_items" v-for="(photo, idy) in photos" :key="idy">
            <div class="photo_image_wrapper">
                <img :src="require('../../static/images/'+photo.img)" alt="">

                <div class="circle_play">
                    <font-awesome-icon :icon="['far', 'image']" />
            </div>
            </div>

            <div class="photo_gallery_details">
                <h3 class="descT desc_box">{{ photo.title?.[$i18n.locale] }}</h3>

                <div class="photo_date">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <span class="commonP">{{ photo.date?.[$i18n.locale] }}</span>
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
            photos: this.$store.state.photoGallery
        }
    }
}
</script>