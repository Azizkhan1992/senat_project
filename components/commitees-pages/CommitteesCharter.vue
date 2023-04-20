<template>
    <div class="committees_charter_container">
        <div class="charter_wrapper">
            <h3 class="descT">{{ charter?.charterHeader?.[$i18n.locale] }}</h3>
            <p class="descP">{{ charter?.common?.[$i18n.locale] }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'committees-charter',
    props: {
        charter: {
            type: Object,
            default: () => {}
        }
    },
}
</script>