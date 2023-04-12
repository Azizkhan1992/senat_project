<template>
    <div class="tab_container" v-show="isActive">
        <slot/>
    </div>
</template>
<script>
export default {
    name: 'app-tab',
    props: {
        name: {required: true},
        id: {
            type: [String, Number],
            default: 1
        },
        length: {
            type: [Number, String],
            default: 3
        },
        descript: {
            type: Object,
            default: () => {}
        },
        date: {
            type: Object,
            default: () => {}
        },
        selected: {default: false}
    },
    data(){
        return{
            isActive: false
        }
    },
    mounted(){
        this.isActive = this.selected
    }
}
</script>