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
                            <img :src="require('../../static/images/'+link.img)" alt="">
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
    </section>
</template>
<script>
export default {
    name: 'usefull-links',
    data(){
        return{
            links: this.$store.state.usefulSites
        }
    },
    methods: {
        goToSite(link){
            window.open(link, '_blank')
        }
    }
}
</script>