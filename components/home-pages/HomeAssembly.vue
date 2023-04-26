<template>
    <section class="assembly_section">
        <div class="assembly_container commonContent">
            <div class="assemblies_wrapper">
                <a-row type="flex" :gutter="[6, 6]">
                    <a-col :span="12">
                    <div class="active_assembly_wrapper" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-quad">
                        <div class="active_assembly_details">
                            <div class="details_top">
                                <div class="active_assembly_number">
                                    <h2>{{ active.number }}</h2>
                                </div>
                                <div class="active_assembly_title">
                                    <h3 class="descT">{{ active.title?.[$i18n.locale] }}</h3>
                                    <span class="descBl">{{ active.date?.[$i18n.locale] }}</span>
                                </div>
                            </div>
                            <hr>

                            <div class="active_assembly__link">
                            <nuxt-link :to="`${link.id}`" v-for="link in active.plans" :key="link.id">{{ link.title?.[$i18n.locale] }}
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </nuxt-link>
                        </div>
                        </div>
                        <div class="Img_wrapper" @click="goToPage(active.link)">
                            <img :src="require('../../static/images/'+active.img)" alt="">
                            <div class="circle_play">
                                <font-awesome-icon :icon="['fasl', 'play']" />
                            </div>
                        </div>
                        
                    </div>
                </a-col>
                <a-col :span="12">
                    <div class="all_assemblies_wrapper">
                        <nuxt-link :to="`${item.id}`" v-for="item in assemblies" :key="item.id" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-quad">
                            <div class="assembly_number">
                                <h3 class="commonT">{{ item.number }}</h3>
                            </div>
                            <div class="assembly_title">
                                <div class="assembly_title_details">
                                    <p class="descT">{{ item.title?.[$i18n.locale] }}</p>
                                    <span class="commonP">{{ item.title?.[$i18n.locale] }}</span>
                                </div>
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>
                        </nuxt-link>
                    </div>
                </a-col>
                </a-row>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-assembly',
    data(){
        return{
            assemblies: this.$store.state.assemblies,
            active: this.$store.state.activeAssembly
        }
    },
    methods: {
        goToPage(link){
            window.open(link, '_blank')
        }
    }
}
</script>