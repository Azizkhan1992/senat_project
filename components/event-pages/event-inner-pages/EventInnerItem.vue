<template>
    <div class="inner-item-container commonContent">
        <div class="inner_wrapper">
            <a-row type="flex" :gutter="[24, 24]">
                <a-col :xs="24" :sm="24" :lg="18" :xl="18" :xxl="18">
                    <div class="inner-event-content">
                        <div class="event-header">
                            <h3>{{ eventItem?.title?.[$i18n.locale] }}</h3>

                            <div class="header_details">
                                <div class="event-viewed">
                                    <font-awesome-icon :icon="['far', 'eye']" />
                                    <span>{{ eventItem?.viewed }}</span>
                                </div>
                                <hr class="vert_hr">
                                <div class="event-date">
                                    <font-awesome-icon :icon="['far', 'clock']" />
                                    <span>{{ eventItem?.date }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="event-image_wrapper">
                            <img v-if="eventItem?.img" :src="require(`@/static/images/events/${eventItem?.img}`)" alt="">
                        </div>

                        <div class="event_details">
                            <p>{{ eventItem?.descript?.[$i18n.locale] }}</p>
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :lg="6" :xl="6" :xxl="6">
                    <div class="banner-events">
                        <div class="banner-header">
                            <h3>{{ $t('similar_events') }}</h3>
                        </div>
                        <div class="banner-events_wrapper">
                            <a-row type="flex" justify="space-between" :gutter="[16, 16]">
                                <a-col :xs="4" :sm="4" :lg="24" :xl="24" :xxl="24" v-for="(item, idx) in events"
                                    :key="item.id">
                                    <nuxt-link :to="`/events/${item.id}`" class="event_item" :class="idx == 4 ? 'last' : ''">
                                        <div class="event-image_wrapper">
                                            <img :src="require('../../../static/images/events/' + item.img)" alt="">
                                        </div>

                                        <div class="event_details">
                                            <div class="event-header">
                                                <font-awesome-icon :icon="['far', 'clock']" />
                                                <span>{{ item.date }}</span>
                                            </div>

                                            <h4 class="title_box">{{ item.title?.[$i18n.locale] }}</h4>
                                        </div>
                                    </nuxt-link>
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'event-inner-item',
    data() {
        return {
            allEvents: this.$store.state.events,
            eventItem: null,
            events: null
        }
    },
    mounted() {
        this.getEvent()
        this.getRandomEvents()
    },
    methods: {
        getEvent() {
            let event
            let route = this.$route.path.split('/')
            event = this.allEvents.filter(e => e.id == route[route.length - 1])[0]

            if (event !== null) {
                this.eventItem = event
            }
        },
        getRandomEvents() {
            let event = JSON.parse(JSON.stringify(this.allEvents))
            const rand = event.sort(() => 0.5 - Math.random())

            this.events = rand.slice(0, 5)
        }
    }
}
</script>