<template>
    <main class="main-page">
        <MainHeaderLayout/>
        <Breadcrumbs :section-name="name" :page-name="pageData.name"/>

        <section class="static-section">
            <div class="main-page-content">
            <div class="page-wrapper commonContent">
                <a-row type="flex" :gutter="[{xxl: 32, xl: 24, lg: 16, sm: 16}, {xxl: 32, xl: 24, lg: 16, sm: 16}]">
                    <a-col :xxl="18" :xl="16" :lg="16" :sm="24">
                        <div class="page-details">
                            <h3 v-html="pageData.name"></h3>
                            <div v-html="pageData.content"></div>
                        </div>
                    </a-col>

                    <a-col :xxl="6" :xl="8" :lg="8" :sm="24">
                        <SideBar/>
                    </a-col>
                </a-row>
            </div>
        </div>
        </section>

        <MainFooterLayout/>
    </main>
</template>
<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import Breadcrumbs from '../Breadcrumbs.vue';
import SideBar from '../SideBar.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
    components: {MainHeaderLayout, Breadcrumbs, SideBar, MainFooterLayout},
    props: {
        pageData: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            name: {
                uz: 'Senat',
                uzc: 'Сенат',
                ru: 'Сенат'
            },
        }
    },
}
</script>