<template>
    <section class="home_news_section">
        <div class="home_news_container commonContent">
            <div class="news_header df-spb">
                <h2 class="mainP">{{ $t('news') }}</h2>

                <nuxt-link to="#" class="descBl">{{ $t('all_news') }}
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                </nuxt-link>
            </div>

            <div class="news_wrapper">
                <a-row type="flex" justify="space-between">
                    <a-col :span="16">
                        <div class="active_news_wrapper news">
                            <ActiveNews/>
                        </div>
                    </a-col>
                    <a-col :span="8">
                        <div class="tag_news_wrapper news">
                            <TagNews/>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>
<script>
import ActiveNews from './ActiveNews.vue';
import TagNews from './TagNews.vue';
export default {
    name: 'home-news',
    components: {ActiveNews, TagNews}
}
</script>