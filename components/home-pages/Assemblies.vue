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
            assemblies: [
                {
                    id: 1,
                    name: {
                        uz: 'Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi',
                        uzc: 'Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитаси',
                        ru: 'Комитет по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму'
                    }
                },
                {
                    id: 2,
                    name: {
                        uz: 'Byudjet va iqtisodiy islohotlar masalalari qo‘mitasi',
                        uzc: 'Бюджет ва иқтисодий ислоҳотлар масалалари қўмитаси',
                        ru: 'Комитет по бюджету и экономическим реформам'
                    }
                },
                {
                    id: 3,
                    name: {
                        uz: 'Sud-huquq masalalari va korrupsiyaga qarshi kurashish qo‘mitasi',
                        uzc: 'Суд-ҳуқуқ масалалари ва коррупцияга қарши курашиш қўмитаси',
                        ru: 'Комитет по судебным вопросам и борьбе с коррупцией'
                    }
                },
                {
                    id: 4,
                    name: {
                        uz: 'Mudofaa va xavfsizlik masalalari qo‘mitasi',
                        uzc: 'Мудофаа ва хавфсизлик масалалари қўмитаси',
                        ru: 'Комитет по вопросам обороны и безопасности'
                    }
                },
                {
                    id: 5,
                    name: {
                        uz: 'Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi',
                        uzc: 'Фан, таълим ва соғлиқни сақлаш масалалари қўмитаси',
                        ru: 'Комитет по науке, образованию и здравоохранению'
                    }
                },
                {
                    id: 6,
                    name: {
                        uz: 'Agrar va suv xo‘jaligi masalalari qo‘mitasi',
                        uzc: 'Аграр ва сув хўжалиги масалалари қўмитаси',
                        ru: 'Комитет по аграрным и водным вопросам'
                    }
                }
            ],
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