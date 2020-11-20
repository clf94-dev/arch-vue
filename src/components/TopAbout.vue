<template>
  <b-container fluid class="top-section-cont">
    <b-row>
      <b-col class="img-col" xs="12" sm="12" md="6" lg="6">
        <img :src="topAboutD" alt="About"
      /></b-col>
      <b-col class="text-col" xs="12" sm="12" md="6" lg="6">
        <h1>About</h1>
        <h3>Your team of professionals</h3>
        <p>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </b-col>
    </b-row></b-container
  >
</template>

<script>
export default {
  name: "TopAbout",
  data() {
    return {
      topAboutD: require("@/assets/images/about/desktop/image-hero.jpg"),
    };
  },
};
</script>

<style scoped></style>
