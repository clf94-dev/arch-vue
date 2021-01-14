<template>
  <b-container fluid class="footer-cont">
    <b-row>
      <b-col xs="12" sm="12" md="2" lg="2">
        <img :src="archLogoW" alt="Arch" />
      </b-col>
      <b-col xs="12" sm="12" md="2" lg="2">
        <a @click="goToPortfolio()">Portfolio</a>
      </b-col>
      <b-col xs="12" sm="12" md="2" lg="2">
        <a @click="goToAbout()">About</a>
      </b-col>
      <b-col xs="12" sm="12" md="2" lg="2">
        <a @click="goToContact()">Portfolio</a>
      </b-col>
      <b-col xs="12" sm="12" md="2" lg="2">
        <button @click="goToPortfolio()">See Our Portfolio</button>
      </b-col>
      <b-col xs="12" sm="12" md="2" lg="2"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      archLogoW: require("@/assets/images/logo copy.svg"),
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    goToPorfolio() {
      this.$router.push("/portfolio");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style scoped></style>
