<template>
    <div class="senators_container">
        <div class="senators_title df-spb">
            <h4 class="descT">{{ $t('senators') }}</h4>

            <span class="commonP" @click="selectAll">{{ $t('all') }}</span>
        </div>
        <hr>
        <div class="senators_wrapper">
            <nuxt-link class="senators" :to="`${senator.id}`" v-for="senator in senators" :key="senator.id">
            <a-col :span="5">
                <div class="senator_img_wrapper">
                    <img :src="require('../../static/images/senat/'+senator.img)" alt="">
                </div>
            </a-col>
            <a-col :span="18">
                <div class="senator_details">
                    <h5 class="descP">{{ senator.name?.[$i18n.locale] }}</h5>
                    <p class="commonP">{{ senator.step?.[$i18n.locale] }}</p>
                </div>
            </a-col>
        </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-senators',
    data(){
        return{
        }
    },
    mounted(){
        this.getSentors()
    },
    methods: {
        getSentors(){
            this.$store.commit('changeDistrict')
        },
        selectAll(){
            this.$store.commit('changeDistrict')
            this.$router.go()
        }
    },
    computed:{
        senators(){
            console.log(this.$store.getters.getSenators)
            return this.$store.getters.getSenators
        }
    }
}
</script>