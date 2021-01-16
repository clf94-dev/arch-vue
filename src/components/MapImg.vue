<template>
  <div class="map-img-cont">
    <img :src="mapD" :srcset="`${mapD} 1000w,${mapT} 780w, ${mapM} 480w`" alt="Map" />
  </div>
</template>

<script>
export default {
  name: "MapImg",
  data() {
    return {
      mapD: require("@/assets/images/contact/desktop/image-map.png"),
      mapT: require("@/assets/images/contact/tablet/image-map.png"),
      mapM: require("@/assets/images/contact/mobile/image-map.png"),
    };
  },
};
</script>

<style scoped>
.map-img-cont {
  padding: 2% 7% 5% 10%;
  justify-content: center;
}

img {
  width: 100%;
}
</style>
