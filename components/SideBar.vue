<template>
    <div class="sidebar_container">
        <div class="sidebar_wrapper">
            <div class="sidebar_header">
                <h3 class="descT">{{ activeSubmenu?.name?.[$i18n.locale] }}</h3>
            </div>
            
            <div class="sidebar_content">
                <ul class="sidebar_items" :class="item.link == activeMenu.link ? 'active' : ''" v-for="item in activeSubmenu?.subMenu" :key="item.id">
                <li>
                    <h4 class="descP" >{{ item.name?.[$i18n.locale] }}</h4>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'side-bar',
    data(){
        return{
            menus: this.$store.state.menus,
            activeMenu: null,
            activeId: null,
            activeSubmenu: null
        }
    },
    mounted(){
        this.getSidebarItems()
    },
    methods: {
        getSidebarItems(){
        let route = this.$route.path.split('/').pop()

        this.menus.forEach(element => {
            if(element.subMenu){
                element.subMenu.forEach(elem => {
                    if(elem.link == route){
                        this.activeMenu = elem
                        this.activeId = elem.id
                        this.activeSubmenu = element
                    }
                })
            }
        });

    }
    }
}
</script>