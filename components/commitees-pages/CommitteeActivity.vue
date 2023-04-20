<template>
    <div class="committee_activity_container">
        <div class="activity_wrapper">
            <nuxt-link to="#" class="activity_items" v-for="activ in activity" :key="activ.id">
                <p class="descT">{{ activ.title?.[$i18n.locale] }}</p>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'committee-activity',
    props: {
        activity: {
            type: Array,
            default: () => []
        }
    }
}
</script>