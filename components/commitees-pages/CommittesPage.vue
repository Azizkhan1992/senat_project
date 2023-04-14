<template>
    <section class="committees_section">
        <div class="committees_container commonContent">
            <a-row>
                <a-col :span="17">
                    <div class="committees_wrapper">
                        <nuxt-link :to="`committees/category/${item.link}`" class="committe_items" v-for="item in committees" :key="item.id">
                            <h3 class="descP">{{ item.name?.[$i18n.locale] }}</h3>
                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
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
    name: 'commit-page',
    components: {SideBar},
    data(){
        return{
            committees: this.$store.state.committess
        }
    },
    mounted(){
        console.log(this.committees)
    }
}
</script>