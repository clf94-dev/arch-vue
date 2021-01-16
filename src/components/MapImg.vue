<template>
  <div>
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

<style scoped></style>
