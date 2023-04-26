<template>
    <nav class="navbar__popup">
        <div class="navbar__container">
            <font-awesome-icon :icon="['fas', 'xmark']" @click="deactive" class="exit-icon" />
            <div class="nav_items__wrapper">
                <div class="navbar_items" v-for="menu in menus" :key="menu.id">
                <p>{{ menu?.slug }}</p>

                <nuxt-link to="#" v-if="menu.children === null">{{ menu.slug }}</nuxt-link>

                <div class="navbar_child_items" v-for="item in menu.children" :key="item.id">
                    <nuxt-link to="#">{{ item.slug }}</nuxt-link>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'navbar-popup',
    props: {
        allMenus: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            menus: []
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
        deactive(){
            this.$emit('navDeactive')
        }
    }
}
</script>