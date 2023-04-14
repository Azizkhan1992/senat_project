<template>
    <section class="breadcrumb_section">
        <div class="breadcrumb_container">
            <div class="breadcrumb_header">
                <nuxt-link to="/" class="descP">
                    <font-awesome-icon :icon="['fasl', 'house']" />
                    {{ mainPage?.[$i18n.locale] }}
                </nuxt-link>
                <span>/</span>

                <p class="descP">{{ sectionName?.[$i18n.locale] }}</p>

                <span>/</span>

                <p class="descBl">{{ pageName?.[$i18n.locale] }}</p>
            </div>

            <div class="active_page_name">
                <h2>{{ pageName?.[$i18n.locale] }}</h2>
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
            type: Object,
            default: () => {}
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
    }
}
</script>