<template>
  <b-container fluid class="top-section-cont">
    <b-row>
      <b-col class="img-col" xs="12" sm="12" md="6" lg="6">
        <img :src="topContactD" alt="About"
      /></b-col>
      <b-col class="text-col" xs="12" sm="12" md="6" lg="6">
        <h1>Contact</h1>
        <h3>Tell us about your project</h3>
        <p>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </b-col>
    </b-row></b-container
  >
</template>

<script>
export default {
  name: "TopContact",
  data() {
    return {
      topContactD: require("@/assets/images/contact/desktop/image-hero.jpg"),
    };
  },
};
</script>

<style scoped></style>
