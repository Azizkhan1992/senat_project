<template>
    <main class="leadership_page">
        <MainHeaderLayout />
        <Breadcrumbs :section-name="name" :page-name="page_name"/>
        <LeadershipPage/>
        <MainFooterLayout/>
    </main>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import LeadershipPage from '~/components/leadership-page/LeadershipPage.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'senat-leaders',
    components: { MainHeaderLayout, Breadcrumbs, LeadershipPage, MainFooterLayout },
    data() {
        return {
            name: {
                uz: 'Senat',
                uzc: 'Сенат',
                ru: 'Сенат'
            },
            page_name: {
                uz: 'Senat rahbariyati',
                uzc: 'Сенат раҳбарияти',
                ru: 'Сенатское руководство'
            },
        }
    }
}
</script>