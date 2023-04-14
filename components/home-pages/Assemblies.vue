<template>
    <div class="assemblies_wrapper">
        <div class="assembly_items" v-for="assembly in assemblies" :key="assembly.id"
        @click="select(assembly.id)" :class="selectedAssembly === assembly.id ? 'active' : ''"
        >
            <h3 class="descT">{{ assembly.name?.[$i18n.locale] }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'senat-assemblies',
    data(){
        return {
            assemblies: this.$store.state.committess,
            selectedAssembly: null
        }
    },
    methods: {
        select(id){
            this.selectedAssembly = id
            this.$store.commit('changeAssembly', id)
        }
    }
}
</script>