<template>
    <div class="news_tabs_wrapper" ref="tabSlot">
        <div class="tabs_header">
            <ul>
                <li v-for="(item, idx) in tabs" :key="idx" @click="selectTab(item)" :class="item.isActive ? 'active' : ''">
                    <div class="tab_items" :class="item.isActive ? 'active' : ''">

                        <div class="tab_items_details" :class="item.isActive == false ? 'circled_details' : ''">
                            <div class="details_title" :class="item.isActive ? 'active' : ''">
                                <div class="tab_date">
                                    <font-awesome-icon :icon="['far', 'clock']" />
                                    <span>{{ item.date?.[$i18n.locale] }}</span>
                                </div>
                                <h3>{{ item.name?.[$i18n.locale] }}</h3>
                                <p v-if="item.isActive">{{ item.descript?.[$i18n.locale] }}</p>
                            </div>
                            <div class="tab_circle" :class="item.isActive == false ? 'active' : ''">
                                <svg xmlns="http://www.w3.org/2000/svg" class="tab_circle_svg"  width="56" height="56" viewBox="-1 -1 34 34">
                                    <circle cx="16" cy="16" r="15.9155" stroke-width="2" fill="currentcolor"
                                        class="tab_bg_circle" />
                                    <circle v-if="circle_checker === item.id" cx="16" cy="16" r="15.9155" stroke-width="2" fill="currentcolor"
                                        class="tab_progres_circle" :stroke-dashoffset="100 - circle"
                                        stroke-dasharray="100, 100" />
                                </svg>
                                <font-awesome-icon :class="item.isActive == false ? '' : 'deactive'" :icon="['fas', 'arrow-right']"  class="arr-right"/>
                            </div>
                            <nuxt-link to="#" v-if="item.isActive">{{ $t("more") }}
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </nuxt-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="tabs_details">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-tabs',
    data() {
        return {
            tabs: [],
            playInterval: '',
            idChecker: null,
            circle: 0,
            playInterval1: '',
            circle_checker: 2
        }
    },
    mounted() {
        this.tabs = [...this.$el.querySelector('.tabs_details').childNodes];

        this.tabs = this.tabs.map(tab => {
            return tab.__vue__;
        });
        // console.log(this.$el.querySelector('.tabs_details').childNodes)
        this.playCircle()
    },
    methods: {
        playCircle() {
            this.idChecker = 1;
            this.playInterval1 = setInterval(() => {
                this.circle++;

                if (this.circle == 100) {
                    this.idChecker++;
                    this.circle = 0;

                    if (this.idChecker > this.tabs.length) {
                        this.idChecker = 1;
                    }

                    if (this.idChecker < this.tabs.length) {
                        this.circle_checker = this.idChecker+1
                    } else {
                        this.circle_checker = 1
                    }

                    this.tabs.forEach(tab => {
                        tab.isActive = tab.id === this.idChecker
                    })
                }
            }, 70)
        },
        selectTab(selectedTab) {
            this.idChecker = selectedTab.id
            this.circle = 0
            if (this.idChecker < this.tabs.length) {
                this.circle_checker = this.idChecker+1
            } else {
                this.circle_checker = 1
            }
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name
            })
        }
    }
}
</script>