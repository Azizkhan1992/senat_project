<template>
    <section class="leadership_section">
        <div class="leadership_container commonContent">
            <a-row>
                <a-col :span="17">
                <div class="leaders_wrapper">
                    <nuxt-link :to="`${leader.id}`" class="leaders" v-for="leader in leaders" :key="leader.id">
                        <div class="leader_image_wrapper">
                            <img :src="require('../../static/images/senat/'+leader.img)" alt="">
                        </div>

                        <div class="leader_details">
                            <h3 class="mainP">{{ leader.name?.[$i18n.locale] }}</h3>
                            <p class="descP">{{ leader.step?.[$i18n.locale] }}</p>
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
            leaders: this.$store.state.leaders,
        }
    },
    created(){
    },
    methods: {
        getActivePages(){
            let activeId = this.$route.query.id
            this.activeMenu = this.menus.filter(e => e.id == activeId)[0].subMenu
            this.name = this.menus.filter(e => e.id == activeId)[0].name
        },
        getActiveRoute(){
            let active = this.$route.path.split('/').pop()

            console.log(active)
        }
    }
}
</script>