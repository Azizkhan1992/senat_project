<template>
    <section class="commit-events-section">
        <a-row type="flex" :gutter="[24, 24]">
            <a-col :xs="24" :sm="24" :lg="12" :xl="12" :xxl="8" v-for="event in events" :key="event.id">
                <nuxt-link :to="`/events/${event.id}`" class="event-items" >
                    <div class="event-image_wrapper">
                        <img :src="require('../../static/images/events/'+event.img)" alt="">
                    </div>

                    <div class="event_details">
                        <div class="detail-header">
                            <div class="event-viewed">
                                <font-awesome-icon :icon="['far', 'eye']" />
                                <span>{{ event.viewed }}</span>
                            </div>

                            <div class="event-date">
                                <font-awesome-icon :icon="['far', 'clock']" />
                                <span>{{ event.date }}</span>
                            </div>
                        </div>
                        <h3 class="title_box">{{ event.title?.[$i18n.locale] }}</h3>

                        <p class="desc_box">{{ event.descript?.[$i18n.locale] }}</p>
                    </div>
                </nuxt-link>
            </a-col>
        </a-row>
    </section>
</template>
<script>
export default {
    name: 'commit-events',
    props: {
        events: {
            type: Array,
            default: () => []
        }
    }
}
</script>