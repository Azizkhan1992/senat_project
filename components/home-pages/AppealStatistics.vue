<template>
    <section class="statistics_section">
        <div class="statistics_wrapper commonContent">
            <div class="statistics_header">
                <h2 class="mainP">{{ $t('appeal_statistics') }}</h2>
            </div>

            <div class="statistics_details">
                <div class="statistics_items" data-aos="fade-up" :data-aos-duration="`${duration[idx]}`"
                    data-aos-easing="ease-in-sine" v-for="(item, idx) in statistics" :key="item.id">
                    <p class="descP">{{ item.title?.[$i18n.locale] }}:</p>

                    <span>{{ item.number }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'appeal-statistics',
    data() {
        return {
            statistics: this.$store.state.appealStatistics,
            duration: [200, 400, 600, 800]
        }
    }
}
</script>