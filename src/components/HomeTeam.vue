<template>
  <b-container fluid>
    <b-col class="team-cont">
      <img :src="teamD" alt="team" />
      <b-col class="team-text">
        <h3>Small team, big ideas</h3>
        <button @click="goToAbout()">
          About Us <img :src="arrow" alt="arrow" />
        </button>
      </b-col> </b-col
  ></b-container>
</template>

<script>
export default {
  name: "HomeTeam",
  data() {
    return {
      teamD: require("@/assets/images/home/desktop/image-small-team.jpg"),
      arrow: require("@/assets/images/icons/icon-arrow.svg"),
    };
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped></style>
