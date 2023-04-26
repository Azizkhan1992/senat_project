<template>
    <section class="leadership_section">
        <div class="leadership_container commonContent">
            <a-row>
                <a-col :span="17">
                <div class="leaders_wrapper">
                    <nuxt-link :to="`/senators/${leader.id}`" class="leaders" v-for="leader in leaders" :key="leader.id">
                        <div class="leader_image_wrapper">
                            <img v-if="leaders?.avatar" :src="leaders?.avatar" alt="">
                            <img v-else src="../../static/images/person.svg" alt="">
                        </div>

                        <div class="leader_details">
                            <h3 class="mainP">{{ leader?.full_name }}</h3>
                            <p class="descP">{{ leader?.work_place }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </a-col>
            <a-col :span="7">
                <SideBar/>
            </a-col>
            </a-row>
        </div>
    </section>
</template>
<script>
import SideBar from '../SideBar.vue'
export default {
    name: 'leadership-section',
    components: {SideBar},
    data(){
        return{
            leaders: [],
        }
    },
    mounted(){
        this.getLeaders()
    },
    methods: {
        async getLeaders(){
            this.leaders = await this.$store.dispatch('getSenatLeaders')
        },
    }
}
</script>