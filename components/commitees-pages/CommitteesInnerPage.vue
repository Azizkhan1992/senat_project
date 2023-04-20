<template>
    <section class="committeess_inner_section">
        <div class="committees_inner_container commonContent">
            <div class="committees_inner_header">
                <div class="header_items" :class="item.id == activeItem ? 'active' : ''" v-for="item in committNavItems" :key="item.id" @click="changeCommitteeItems(item.id)">
                    <h3 class="descP">{{ item.title?.[$i18n.locale] }}</h3>
                </div>
            </div>

            <div class="committees_inner_wrapper">
                <a-row type="flex" :gutter="[8, 8]">
                    <a-col :xs="24" :sm="24" :lg="18" :xl="18" :xxl="18">
                        <CommitteesActiveMembers :active-members="activeMembers" v-if="activeItem === 1"/>
                        <CommitteesCharter :charter="activeCommitt.committeCharter" v-if="activeItem === 2"/>
                        <CommitteesPlan v-if="activeItem === 3"/>
                        <CommitteeActivity :activity="activeCommitt.activity" v-if="activeItem === 4"/>
                        <CommitteeMonitoring :monitoring="activeCommitt.monitoring" v-if="activeItem === 5"/>
                        <CommitEvents :events="commitEvents" v-if="activeItem === 6"/>
                    </a-col>
                    <a-col :xs="24" :sm="24" :lg="6" :xl="6" :xxl="6">
                        <SideBar/>
                    </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>
<script>
import CommitteesActiveMembers from './CommitteesActiveMembers.vue'
import SideBar from '../SideBar.vue'
import CommitteesCharter from './CommitteesCharter.vue'
import CommitteesPlan from './CommitteesPlan.vue'
import CommitteeActivity from './CommitteeActivity.vue'
import CommitteeMonitoring from './CommitteeMonitoring.vue'
import CommitEvents from './CommitEvents.vue'
export default {
    name: 'committees-inner-page',
    components: {CommitteesActiveMembers, SideBar, CommitteesCharter, CommitteesPlan, CommitteeActivity, CommitteeMonitoring, CommitEvents},
    data(){
        return {
            committNavItems: [
                {
                    id: 1,
                    title: {
                        uz: 'Qo‘mita a\'zolari',
                        uzc: 'Қўмита аъзолари',
                        ru: 'Члены комитета'
                    }
                },
                {
                    id: 2,
                    title: {
                        uz: 'Qo‘mita nizomi',
                        uzc: 'Қўмита низоми',
                        ru: 'Устав комитета'
                    }
                },
                {
                    id: 3,
                    title: {
                        uz: 'Qo‘mita ish-rejasi',
                        uzc: 'Қўмита иш-режаси',
                        ru: 'План работы комитета'
                    }
                },
                {
                    id: 4,
                    title: {
                        uz: 'Qonunchilik faoliyati',
                        uzc: 'Қонунчилик фаолияти',
                        ru: 'Законодательная деятельность'
                    }
                },
                {
                    id: 5,
                    title: {
                        uz: 'Nazorat-tahlil faoliyati',
                        uzc: 'Назорат-таҳлил фаолияти',
                        ru: 'Мониторинг и анализ деятельности'
                    }
                },
                {
                    id: 6,
                    title: {
                        uz: 'Tadbirlar',
                        uzc: 'Тадбирлар',
                        ru: 'События'
                    }
                },
                {
                    id: 7,
                    title: {
                        uz: 'Murojaatlar bilan ishlash',
                        uzc: 'Мурожаатлар билан ишлаш',
                        ru: 'Обработка приложений'
                    }
                }
            ],
            committeess: this.$store.state.committess,
            activeCommitt: null,
            activeRoute: this.$route.params.id,
            activeItem: 1,
            activeMembersId: null,
            senators: this.$store.state.allSenators,
            activeMembers: [],
            allEvents: this.$store.state.events,
            commitEvents: []
        }
    },
    mounted(){
        this.getMembers()
    },
    methods: {
        getMembers(){
            this.activeMembersId = this.committeess.filter(e => e.name.uz == this.activeRoute)[0].id

            this.activeCommitt = this.committeess.filter(e => e.link == this.activeRoute)[0]

            this.activeMembers = this.senators.filter(e => e.assembly === this.activeMembersId)

            this.commitEvents = this.allEvents.filter(e => e.commitType === this.activeMembersId)

        },
        changeCommitteeItems(id){
            this.activeItem = id
        }
    }
}
</script>