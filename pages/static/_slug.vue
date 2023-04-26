<template>
    <Pages :pageData="detail"/>
</template>
<script>
import Pages from '../../components/static-pages'
import {mapActions} from 'vuex'
export default {
    components: {Pages},
    data(){
        return {
            detail: {}
        }
    },
    async created(){
        await this.fetchData()
    },
    methods: {
        ...mapActions(['getStaticMenu']),

        async fetchData(){
            try{
                let {data} = await this.getStaticMenu({
                    slug: this.$route.params.slug
                })
                this.detail = data
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>