<template>
    <div>
<TopAbout></TopAbout>
<AboutMiddle></AboutMiddle>
<TeamAbout></TeamAbout>
    </div>
</template>

<script>
import TopAbout from '../TopAbout.vue'
import AboutMiddle from '../AboutMiddle.vue'
import TeamAbout from '../TeamAbout.vue'
    export default {
        name: 'About',
        components: {
            TopAbout,
            AboutMiddle,
            TeamAbout
        }
    }
</script>

<style scoped>

</style>