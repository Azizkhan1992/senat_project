<template>
    <section class="events-category-section">
        <MainHeaderLayout/>
        <Breadcrumbs :sectionName="name" :pageName="activePage.name"/>
        <EventsInnerPage :events="activeEvents"/>
        <MainFooterLayout/>
    </section>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import EventsInnerPage from '~/components/event-pages/event-inner-pages/EventsInnerPage.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'event-categories',
    components: {MainHeaderLayout, Breadcrumbs, EventsInnerPage, MainFooterLayout},
    data(){
        return{
            allMenu: this.$store.state.menus[4].subMenu,
            name: {
                uz: 'Tadbirlar',
                uzc: 'Тадбирлар',
                ru: 'События'
            },
            activePage: {},
            allEvents: this.$store.state.events,
            activeMenuId: null,
            activeEvents: []
        }
    },
    mounted(){
        this.getPageName()
        this.getActiveMenu()
    },
    methods: {
        getPageName(){
            let name = this.$route.params.id
            this.allMenu.forEach(element => {
                if(element.link.split('/')[element.link.split('/').length-1] == name){
                    this.activePage = element
                }
            });
        },
        getActiveMenu(){
            let name = this.$route.params.id,
            activeId
            for(let i = 0; i<this.allMenu.length; i++){
                if(this.allMenu[i].link.split('/')[this.allMenu[i].link.split('/').length - 1] === name){
                    activeId = i+1
                }
            }

            if(activeId){
                this.activeEvents = this.allEvents.filter(e => e.eventType === activeId)
            }
        }
    }
}
</script>