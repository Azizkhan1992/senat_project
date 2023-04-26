<template>
    <section class="breadcrumb_section">
        <div class="breadcrumb_container">
            <div class="breadcrumb_header">
                <nuxt-link :to="localePath('/')" class="descP">
                    <font-awesome-icon :icon="['fasl', 'house']" />
                    {{ mainPage?.[$i18n.locale] }}
                </nuxt-link>
                <span>/</span>

                <p class="descP">{{ sectionName?.[$i18n.locale] }}</p>

                <span v-if="sectionName && pageName !== null">/</span>

                <p v-if="isInner == false && typeof(pageName) == 'string'" class="descBl">{{ pageName }}</p>

                <p v-else-if="isInner == false && typeof(pageName) == 'object'" class="descBl">{{ pageName?.[$i18n.locale] }}</p>

                <p v-else class="descBl" :class="isInner == true ? 'oldPage' : ''" @click="goBack">{{ pageName?.[$i18n.locale] }}</p>


                <p v-if="!isInner" class="descBl">{{ innerPage?.[$i18n.locale] }}</p>
            </div>
            <div class="active_page_name">
                <h2 v-if="pageName === null && pageName !== ''">{{ sectionName?.[$i18n.locale] }}</h2>
                <h2 v-if="isInner == false && typeof(pageName) == 'string'">{{ pageName }}</h2>
                <h2 v-else-if="isInner == false && typeof(pageName) == 'object'">{{ pageName?.[$i18n.locale] }}</h2>
                <h2 v-else>{{ innerPage?.[$i18n.locale] }}</h2>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'site-breadcrumbs',
    props: {
        sectionName: {
            type: Object,
            default: () => {}
        },
        pageName: {
            type: [Object, String],
            default: () => null
        },
        innerPage: {
            type: Object,
            default: () => {}
        },
        isInner: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            mainPage: {
                uz: 'Bosh sahifa',
                uzc: 'Бош саҳифа',
                ru: 'Домашняя страница'
            }
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>