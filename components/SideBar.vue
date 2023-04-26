<template>
    <div class="sidebar_container">
        <div class="sidebar_wrapper">
            <div class="sidebar_header">
                <h3 class="descT">{{ activeSubmenu?.name }}</h3>
            </div>

            <div class="sidebar_content">
                <ul class="sidebar_items" :class="item?.slug == activeMenu?.slug ? 'active' : ''"
                    v-for="item in activeSubmenu?.children" :key="item.id">
                    <li v-if="item.category == null">
                        <nuxt-link  :to="staticPages(item.slug)">
                            <h4 class="descP">{{ item.name }}</h4>
                        </nuxt-link>
                        
                    </li>
                    <li v-else-if="item.category == 'events'">
                        <nuxt-link  :to="toEvents(item.slug)">
                            <h4 class="descP">{{ item.name }}</h4>
                        </nuxt-link>
                    </li>
                    <li v-else>
                        <nuxt-link :to="acceptLang(item.category)">
                            <h4 class="descP">{{ item.name }}</h4>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'side-bar',
    data() {
        return {
            menus: this.$store.state.menus,
            activeMenu: null,
            activeId: null,
            activeSubmenu: null
        }
    },
    mounted() {
        this.getSidebarItems()
    },
    computed: {
        ...mapGetters(['getMenus'])
    },
    methods: {
        getSidebarItems() {
            let fullRoute = this.$route.path.split('/')
            this.getMenus.forEach(element => {
                if (element.children !== null) {
                    if(element.category !== 'events'){
                        element.children.forEach(elem => {
                        if (elem?.slug == fullRoute[fullRoute.length-1]) {
                                this.activeSubmenu = element
                                this.activeMenu = elem
                            }
                        })
                    } else {
                        element.children.forEach(elem => {
                            if(elem.slug == this.$route.params.id){
                                this.activeSubmenu = element
                                this.activeMenu = elem
                            }
                        })
                    }
            
                }
            });

        },
        acceptLang(link){
            return `/${this.$i18n.locale}/${link}`
        },
        staticPages(link){
            return `/${this.$i18n.locale}/static/${link}`
        },
        toEvents(link){
            return `/${this.$i18n.locale}/events/categories/${link}`
        },
    }
}
</script>