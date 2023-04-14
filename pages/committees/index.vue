<template>
    <menu class="committees_page">
        <MainHeaderLayout/>
        <Breadcrumbs :section-name="section" :pageName="page"/>
        <CommittesPage/>
        <MainFooterLayout/>
    </menu>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import CommittesPage from '~/components/commitees-pages/CommittesPage.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'committees-page',
    components: {MainHeaderLayout, Breadcrumbs, CommittesPage, MainFooterLayout},
    data(){
        return{
            section: {
                uz: 'Senat',
                uzc: 'Сенат',
                ru: 'Сенат'
            },
            page: {
                uz: 'Qo‘mitalar',
                uzc: 'Қўмиталар',
                ru: 'Комитеты'
            }
        }
    }
}
</script>