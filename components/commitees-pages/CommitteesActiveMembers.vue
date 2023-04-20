<template>
    <div class="active_members_container">
        <div class="member_items" v-for="member in activeMembers" :key="member.id">
            <div class="member_image_wrapper">
                <img :src="require('../../static/images/senat/'+member.img)" alt="">
            </div>

            <div class="member_items_details">
                <h4 class="mainP">{{ member.name?.[$i18n.locale] }}</h4>
                <p class="descP">{{ member.step?.[$i18n.locale] }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'active-members',
    props: {
        activeMembers: {
            type: Array,
            default: () => []
        }
    }
}
</script>