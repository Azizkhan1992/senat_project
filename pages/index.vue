<template>
  <main class="homePage">
    <MainHeaderLayout />
    <HotNews />
    <InteractiveServices />
    <HomeNews />
    <HomeAssembly />
    <InteractiveMap />
    <AppealStatistics />
    <HomeArticles />
    <HomeBanner />
    <HomeMedia />
    <UsefulLinks />
    <MainFooterLayout />
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
import HomeArticles from '~/components/home-pages/HomeArticles.vue';
import HomeBanner from '~/components/home-pages/HomeBanner.vue';
import HomeMedia from '~/components/home-pages/HomeMedia.vue';
import UsefulLinks from '~/components/home-pages/UsefulLinks.vue';
import MainFooterLayout from '~/layouts/MainFooterLayout.vue';
export default {
  name: 'IndexPage',
  components: { MainHeaderLayout, HotNews, InteractiveServices, HomeNews, HomeAssembly, InteractiveMap, AppealStatistics, HomeArticles, HomeBanner, HomeMedia, UsefulLinks, MainFooterLayout }
}
</script>
