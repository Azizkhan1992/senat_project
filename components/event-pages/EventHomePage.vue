<template>
    <div class="event-page-container commonContent">
        <div class="event-page-wrapper">

            <a-row type="flex" :gutter="24">
                <a-col :sm="24" :xs="24" :lg="16" :xl="16" :xxl="18">
                    <div class="event-content">
                        <a-row type="flex" :gutter="[24, 24]">
                            <a-col :sm="24" :xs="24" :lg="12" :xl="12" :xxl="8" v-for="event in events" :key="event.id">
                                <nuxt-link :to="`events/${event.id}`" class="event-item">
                                    <div class="event-image_wrapper">
                                        <img :src="require('../../static/images/events/' + event.img)" alt="">
                                    </div>

                                    <div class="event_details">
                                        <div class="event-header">
                                            <div class="event-viewed">
                                                <font-awesome-icon :icon="['far', 'eye']" />
                                                <span>{{ event.viewed }}</span>
                                            </div>
                                            <div class="event-date">
                                                <font-awesome-icon :icon="['far', 'clock']" />
                                                <span>{{ event.date }}</span>
                                            </div>
                                        </div>

                                        <h3>{{ event.title?.[$i18n.locale] }}</h3>
                                        <p>{{ event.descript?.[$i18n.locale] }}</p>
                                    </div>
                                </nuxt-link>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :sm="24" :xs="24" :lg="8" :xl="8" :xxl="6">
                    <div class="event_items">
                        <div class="event-side-bar">
                            <SideBar />
                        </div>

                        <div class="event_date">
                            <a-date-picker :getCalendarContainer="getCalendarContainer()" :open="true" :showToday="false"
                                v-model="today1">
                                <template slot="dateRender" slot-scope="current, today">
                                    <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                                        {{ current.date() }}
                                    </div>
                                </template>
                            </a-date-picker>
                        </div>
                    </div>
                </a-col>
            </a-row>


        </div>
    </div>
</template>
<script>
import moment from 'moment';
import SideBar from '../SideBar.vue';
export default {
    name: 'event-page',
    components: { SideBar },
    data() {
        return {
            events: this.$store.state.events,
            today1: moment(new Date())
        }
    },
    methods: {
        getCalendarContainer() {
            return (triggerNode) => {
                return triggerNode.parentNode.parentNode;
            }
        },
        getCurrentStyle(current, today) {
            const style = {};
            if (this.getEventDates(current)) {
                style.border = '1px solid #003087';
                style.borderRadius = '50%';
                style.color = '#003087';
                style.fontSize = '0.85rem';
                style.fontWeight = '700'
            }
            return style;
        },
        getEventDates(current) {
            for (let i = 0; i < this.events.length; i++) {
                let date = this.events[i].date;
                if (moment(current.format('DD.MM.YYYY').toString()).isSame(date)) {
                    return current;
                }
            }
            return false;
        }
    }
}
</script>