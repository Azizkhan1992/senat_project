<template>
    <section class="events-category-section">
        <MainHeaderLayout/>
        <Breadcrumbs :sectionName="name" :pageName="activePage.name"/>
        <EventsInnerPage :events="allEvents"/>
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
            name: {
                uz: 'Tadbirlar',
                uzc: 'Тадбирлар',
                ru: 'События'
            },
            activePage: {},
            allEvents: {},
            activeMenuId: null,
            activeEvents: [],
            pagePath: this.$route.params.id
        }
    },
    mounted(){
        this.getEvents()
    },
    methods: {
        async getEvents(){
            const params = {
                limit: 10,
                name: this.pagePath
            }
            this.allEvents = await this.$store.dispatch('getAllEvents', params)
        }
    }
}
</script>