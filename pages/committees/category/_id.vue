<template>
    <menu class="committees_inner_page">
        <MainHeaderLayout/>
        <Breadcrumbs :sectionName="section" :pageName="page" :innerPage="pageName" :isInner="true"/>
        <CommitteesInnerPage/>
        <MainFooterLayout/>
    </menu>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import CommitteesInnerPage from '~/components/commitees-pages/CommitteesInnerPage.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    name: 'committees-inner',
    components: {MainHeaderLayout, Breadcrumbs, CommitteesInnerPage, MainFooterLayout},
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
            },
            committeess: this.$store.state.committess,
            pageName: null,
            activeRoute: this.$route.params.id
        }
    },
    mounted(){
        this.getPageName()
    },
    methods: {
        getPageName(){
            this.pageName = this.committeess.filter(e => e.link == this.activeRoute)[0].name
        }
    }
}
</script>