<template>
    <div>
<HomeIntro></HomeIntro>
<Welcome></Welcome>
<HomeTeam></HomeTeam>
<HomeFeatured></HomeFeatured>
    </div>
</template>

<script>
import HomeIntro from '../HomeIntro.vue'
import Welcome from '../Welcome.vue'
import HomeTeam from '../HomeTeam.vue'
import HomeFeatured from '../HomeFeatured.vue'
    export default {
        name:'Home',
        components:{
            HomeIntro,
            Welcome,
            HomeTeam,
            HomeFeatured
        }
    }
</script>

<style scoped>

</style>