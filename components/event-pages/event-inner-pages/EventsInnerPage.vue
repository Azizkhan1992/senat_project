<template>
    <div class="events-inner_container commonContent">
        <div class="events-inner_wrapper">
            <a-row type="flex" :gutter="[24, 24]">
                <a-col :xs="24" :sm="24" :lg="18" :xl="18" :xxl="18">
                    <div class="events-content">
                        <a-row type="flex" :gutter="[24, 24]">
                            <a-col :xs="24" :sm="24" :lg="12" :xl="12" :xxl="8" v-for="event in events" :key="event.id">
                                <nuxt-link :to="`/events/${event.id}`" class="event-items">
                                    <div class="event-img_wrapper">
                                        <img :src="require('../../../static/images/events/'+event.img)" alt="">
                                    </div>
                                    <div class="event_details">
                                        <div class="details-header df-spb">
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
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :lg="6" :xl="6" :xxl="6">
                    <SideBar/>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import SideBar from '~/components/SideBar.vue';
export default {
    name: 'events-inner-page',
    components: {SideBar},
    props: {
        events: {
            type: Array,
            default: () => []
        }
    }
}
</script>