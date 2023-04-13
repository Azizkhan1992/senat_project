<template>
    <section class="home_media_section">
        <div class="home_media_container commonContent">
            <div class="home_media_header">
                <h2 class="mainP">{{ $t('media') }}</h2>
            </div>

            <div class="home_media_wrapper">
                <a-tabs>
                    <a-tab-pane key="1" :tab="$t('video_gallery')">
                        <HomeVideoGallery/>
                    </a-tab-pane>
                    <a-tab-pane key="2" :tab="$t('photo_gallery')">
                        <HomePhotoGallery/>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </section>
</template>
<script>
import HomeVideoGallery from './HomeVideoGallery.vue'
import HomePhotoGallery from './HomePhotoGallery.vue';
export default {
    name: 'home-media',
    components: {HomeVideoGallery, HomePhotoGallery}
}
</script>