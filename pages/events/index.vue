<template>
    <main class="all-events-page">
        <MainHeaderLayout/>
        <Breadcrumbs :sectionName="name"/>
        <EventHomePage/>
        <MainFooterLayout/>
    </main>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import EventHomePage from '~/components/event-pages/EventHomePage.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'all-events',
    components: {MainHeaderLayout, Breadcrumbs, EventHomePage, MainFooterLayout},
    data() {
        return{
            name: {
                uz: 'Tadbirlar',
                uzc: 'Тадбирлар',
                ru: 'События'
            }
        }
    }
}
</script>