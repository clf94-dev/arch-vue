<template>
  <b-container fluid class="team-cont">
    <b-row>
      <b-col xs="12" sm="12" md="12" lg="12">
        <img
          class="back-img"
          :src="teamD"
          :srcset="`${teamD} 1000w,${teamT} 990w, ${teamM} 480w`"
          alt="team"
        />
        <div class="team-text">
          <h3>Small team, big ideas</h3>
          <button @click="scrollToTop(), goToAbout()">About Us <img :src="arrow" alt="arrow" /></button>
        </div> </b-col></b-row
  ></b-container>
</template>

<script>
export default {
  name: "HomeTeam",
  data() {
    return {
      teamD: require("@/assets/images/home/desktop/image-small-team.jpg"),
      teamT: require("@/assets/images/home/tablet/image-small-team.jpg"),
      teamM: require("@/assets/images/home/mobile/image-small-team.jpg"),
      arrow: require("@/assets/images/icons/icon-arrow.svg"),
    };
  },
  methods: {
    scrollToTop() {
                window.scrollTo(0,0);
           },
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.team-cont {
  padding: 5% 7%;
}

.team-cont .team-text {
  padding: 10% 15%;
  text-align: start !important;
  z-index: 2 !important;
  width: 60%;
}
.team-cont .back-img {
  width: 80%;
  position: absolute !important;
  left: 7%;
  z-index: -1;
}
.team-cont .team-text h3 {
  font-weight: 300;
  color: white;
  padding-right: 30% !important;
  font-size: 40px;
  padding-bottom: 30px;
}

@media screen and (min-width: 1080px) {
  .team-cont .team-text h3 {
    padding-right: 40%;
    font-size: 56px;
  }
}
@media screen and (max-width: 1080px) and (min-width: 500px) {
  .team-cont .team-text h3 {
    padding-right: 25%;
    font-size: 50px;
  }
}
@media screen and (min-width: 756px) {
  .team-cont .team-text h3 {
    font-size: 56px;
  }
}

.team-cont .team-text button {
  width: 250px;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid black;
}

.team-cont .team-text button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.team-cont .team-text button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}
</style>
