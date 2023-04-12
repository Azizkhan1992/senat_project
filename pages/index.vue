<template>
  <main class="homePage">
    <MainHeaderLayout/>
    <HotNews/>
    <InteractiveServices/>
    <HomeNews/>
    <HomeAssembly/>
    <InteractiveMap/>
    <AppealStatistics/>
  </main>
</template>

<script>
import MainHeaderLayout from '~/layouts/MainHeaderLayout.vue';
import HotNews from '~/components/home-pages/HotNews.vue';
import InteractiveServices from '~/components/home-pages/InteractiveServices.vue';
import HomeNews from '~/components/home-pages/HomeNews.vue'
import HomeAssembly from '~/components/home-pages/HomeAssembly.vue';
import InteractiveMap from '~/components/home-pages/InteractiveMap.vue';
import AppealStatistics from '~/components/home-pages/AppealStatistics.vue';
export default {
  name: 'IndexPage',
  components: {MainHeaderLayout, HotNews, InteractiveServices, HomeNews, HomeAssembly, InteractiveMap, AppealStatistics}
}
</script>
