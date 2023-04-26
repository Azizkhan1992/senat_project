<template>
    <section class="statistics_section">
        <div class="statistics_wrapper commonContent">
            <div class="statistics_header">
                <h2 class="mainP">{{ $t('appeal_statistics') }}</h2>
            </div>

            <div class="statistics_details">
                <a-row type="flex" justify="space-between" :gutter="[12, 12]">
                    <a-col :xs="24" :sm="12" :lg="6" :xl="6" :xxl="6"  data-aos="fade-up" :data-aos-duration="`${duration[idx]}`"
                    data-aos-easing="ease-in-sine" v-for="(item, idx) in statistics" :key="item.id">
                    
                    <div class="statistics_items">
                        <p class="descP">{{ item.title?.[$i18n.locale] }}:</p>

                    <span>{{ item.number }}</span>
                    </div>
                </a-col>
                </a-row>
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