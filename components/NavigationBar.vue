<template>
    <nav class="navigation">
        <div class="navigation_content">
                
            <div class="navigation_wrapper">
                <div class="navItems" v-for="menu in menus" :key="menu.id">
                    <div class="navItem Item_visible" @click="dropdown(menu)">
                        <p v-if="menu.children !== null && menu.on_header === true" class="descP" id="menu">{{ menu.slug }}</p>
                        <a v-else-if="menu.on_header === true" :href="menu.category" class="descP">{{ menu.slug }}</a>
                        <font-awesome-icon v-if="menu.children !== null && menu.on_header === true" :icon="['fas', 'chevron-down']" />
                    </div>

                    <div class="nav_dropdown Item_hidden">
                        <div class="nav_dropdown_item" v-show="dropdown.id === menu.id" v-for="dropdown in menus" :key="dropdown.id" :class="dropdownMenu === true && dropdown.id == openMenuPages?.id ? 'open' : '' ||
                            dropdown.id !== openMenuPages?.id ? 'closed' : ''
                        ">
                            <div class="drop_item" id="drp" v-for="link in dropdown.children" :key="link.id">
                                <nuxt-link v-if="link.category == null" :to="{path: `/${link.slug}`}" class="descP">{{ link.slug }}</nuxt-link>
                                <nuxt-link v-else :to="`/${link.category}`" class="descP">
                                    {{ link.slug }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
        </div>


    </nav>
</template>
<script>
export default {
    name: 'app-navigation',
    props: {
        allMenus: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            menus: [],
            dropdownMenu: false,
            idChecker: '',
            openMenuPages: null
        }
    },
    mounted(){
        this.initialization()
    },
    methods: {
        initialization(){
            if(this.allMenus?.length>0){
                this.menus = this.allMenus
            }
        },
        dropdown(menu) {
            const selectedMenuId = menu.id
            let _t = this

            document.addEventListener('click', function (e) {
                if (e.target && e.target.id !== 'menu' && e.target.id !== 'drp') {
                    _t.dropdownMenu = false,
                        _t.idChecker = ''
                }
            })

            if (menu.children?.length > 0) {
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