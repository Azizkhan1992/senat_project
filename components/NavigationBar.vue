<template>
    <nav class="navigation">
        <div class="navigation_content commonContent">
            <a-col :span="22" class="navigation_wrapper">
                <div class="ImgWr">
                    <img src="../static/images/list.png" alt="">
                </div>

                <div class="navItems" v-for="menu in menus" :key="menu.id">
                    <div class="navItem Item_visible" @click="dropdown(menu)">
                        <p v-if="menu.subMenu?.length > 0" class="descP" id="menu">{{ menu.name[$i18n.locale] }}</p>
                        <a v-else :href="menu.link" class="descP">{{ menu.name[$i18n.locale] }}</a>
                        <font-awesome-icon v-if="menu.subMenu?.length > 0" :icon="['fas', 'chevron-down']" />
                    </div>

                    <div class="nav_dropdown Item_hidden">
                        <div class="nav_dropdown_item" v-show="dropdown.id === menu.id" v-for="dropdown in menus" :key="dropdown.id" :class="dropdownMenu === true && dropdown.id == openMenuPages?.id ? 'open' : '' ||
                            dropdown.id !== openMenuPages?.id ? 'closed' : ''
                        ">
                            <div class="drop_item" id="drp" v-for="link in dropdown.subMenu" :key="link.id">
                                <nuxt-link :to="{path: `/${link.link}`}" class="descP">{{ link.name[$i18n.locale] }}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </a-col>
        </div>


    </nav>
</template>
<script>
export default {
    name: 'app-navigation',
    data() {
        return {
            menus: this.$store.state.menus,
            dropdownMenu: false,
            idChecker: '',
            openMenuPages: null
        }
    },
    methods: {
        dropdown(menu) {
            const selectedMenuId = menu.id
            let _t = this

            document.addEventListener('click', function (e) {
                if (e.target && e.target.id !== 'menu' && e.target.id !== 'drp') {
                    _t.dropdownMenu = false,
                        _t.idChecker = ''
                }
            })

            if (menu.subMenu?.length > 0) {
                if (this.idChecker === selectedMenuId) {
                    this.dropdownMenu = false,
                        this.idChecker = ''
                } else {
                    document.removeEventListener('click', function () { })
                    this.idChecker = selectedMenuId
                    this.openMenuPages = menu
                    this.dropdownMenu = true
                }
            } else {
                this.dropdownMenu = false,
                    this.idChecker = ''
            }
        }
    }
}
</script>