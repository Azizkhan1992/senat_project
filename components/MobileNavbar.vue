<template>
    <nav class="mobile__navbar">
        <div class="navigation_content">
            <font-awesome-icon :icon="['fas', 'xmark']" @click="deactive" class="close_item" />

            <div class="navigation_wrapper">

                <ul>
                    <li v-for="menu in menus" :key="menu.id">
                        <a-collapse accordion v-if="menu?.children !== null" :bordered="false" >
                            <a-collapse-panel key="1" :header="menu.name" :showArrow="false">
                                <div class="menu__items" v-for="item in menu.children" :key="item.id">
                                    <nuxt-link v-if="item.category == null"
                                    :to="staticPages(item.slug)"
                                    class="descP">{{ item.name }}</nuxt-link>
                                <nuxt-link v-else :to="acceptLang(item.category)" class="descP">
                                    {{ item.name }}
                                </nuxt-link>
                                </div>
                            </a-collapse-panel>
                        </a-collapse>

                        <font-awesome-icon :icon="['fas', 'chevron-down']" v-if="menu?.children !== null" />

                        <nuxt-link to="#" v-else>{{ menu.name }}</nuxt-link>
                    </li>
                </ul>
            </div>


        </div>
    </nav>
</template>
<script>
export default {
    name: 'mobile-navbar',
    props: {
        allMenus: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            menus: [],
            idChecker: '',
            openMenuPages: null,
            isOpen: false
        }
    },
    mounted() {
        this.initialization()
    },
    methods: {
        initialization(){
            if(this.allMenus?.length>0){
                this.menus = this.allMenus
            }
        },
        acceptLang(link){
            return `/${this.$i18n.locale}/${link}`
        },
        staticPages(link){
            return `/${this.$i18n.locale}/static/${link}`
        },
        customExpandIcon(props) {
            if (props.isActive) {
                return <a onClick={e => {
                    props.onItemClick(props.panelKey)
                }}><Icon type="minus" /></a>
            } else {
                return <a onClick={e => {
                    props.onItemClick(props.panelKey)
                }}><Icon type="plus" /></a>
            }
        },
        deactive() {
            this.$emit('navDeactive')
        },
        open(id){
            this.isOpen = !this.isOpen
            this.idChecker = id
        }
    }
}
</script>