<template>
    <main class="event-inner-page">
        <MainHeaderLayout/>
        <Breadcrumbs :sectionName="name" :page-name="activeMenu?.name"/>
        <EventInnerItem :item="activeEvent"/>
        <MainFooterLayout/>
    </main>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import EventInnerItem from '~/components/event-pages/event-inner-pages/EventInnerItem.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'event-inner',
    components: {MainHeaderLayout, Breadcrumbs, EventInnerItem, MainFooterLayout},
    data(){
        return{
            name: {
                uz: 'Tadbirlar',
                uzc: 'Тадбирлар',
                ru: 'События'
            },
            
            menus: this.$store.state.menus[4].subMenu,
            activeMenu: null,
            activeEvent: {}
        }
    },
    mounted(){
        this.getMenu()
    },
    methods: {
        getMenu(){
            for (let i=0; i<this.menus.length; i++){
                if(this.activeEvent.eventType-1 === i){
                    this.activeMenu = this.menus[i]
                }
            }
        },
        
    }
}
</script>