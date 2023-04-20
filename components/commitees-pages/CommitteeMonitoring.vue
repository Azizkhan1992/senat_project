<template>
    <div class="committee_monitoring_container">
        <div class="monitoring_wrapper">
            <nuxt-link to="#" class="monitoring_items" v-for="item in monitoring" :key="item.id">
                <p class="descT">{{ item.title?.[$i18n.locale] }}</p>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "committee-monitoring",
    props: {
        monitoring: {
            type: Array,
            default: () => []
        }
    }
}
</script>