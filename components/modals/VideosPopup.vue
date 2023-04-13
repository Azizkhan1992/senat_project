<template>
    <div class="videos_popup">
        <font-awesome-icon :icon="['fas', 'xmark']" class="videos_exit" size="2x" @click.stop="close"/>
        <slot/>
    </div>
</template>
<script>
export default {
    name: 'video-popup',
    props: {
        isPlaying: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            isExit: false
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        Activate(){
            this.isExit = this.isPlaying;
        },
        exit(){
            this.isExit = false
        }
    }
}
</script>