<template>
  <b-container fluid class="top-section-cont">
    <b-row>
      <b-col class="img-col" xs="12" sm="12" md="6" lg="6">
        <img :src="topAboutD" :srcset="`${topAboutD} 1000w, ${topAboutT} 900w, ${topAboutM} 600w`" alt="About"
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
      topAboutT: require("@/assets/images/about/tablet/image-hero.jpg"),
      topAboutM: require("@/assets/images/about/mobile/image-hero.jpg"),
    };
  },
};
</script>

<style scoped>
.top-section-cont {
  padding: 2% 7% 5% 10%;
}

@media screen and (max-width: 756px) {
  .top-section-cont .img-col {
    overflow-x: hidden;
  }
}

.top-section-cont .img-col img {
  width: 120%;
}

@media screen and (max-width: 1081px) {
  .top-section-cont .img-col img {
    width: 160% !important;
  }
}

.top-section-cont .text-col {
  background-color: white;
  text-align: start;
}

@media screen and (min-width: 1080px) {
  .top-section-cont .text-col {
    position: absolute;
    left: 42%;
    top: 40% !important;
    padding: 13% 7% 12% 10% !important;
  }
}

@media screen and (min-width: 757px) {
  .top-section-cont .text-col {
    position: absolute;
    left: 42%;
    top: 60%;
    padding: 13% 7% 10% 10%;
  }
}

.top-section-cont .text-col h1 {
  display: block;
  position: absolute;
  top: -12%;
  left: -20%;
  font-size: 150px;
  font-family: sans-serif;
  font-weight: 400;
  color: #eeeff4;
  padding-left: 17%;
}

@media screen and (min-width: 1080px) {
  .top-section-cont .text-col h1 {
    font-size: 200px;
  }
}

@media screen and (max-width: 756px) {
  .top-section-cont .text-col h1 {
    display: none;
  }
}

.top-section-cont .text-col h3 {
  font-size: 56px;
  font-weight: 300;
  letter-spacing: -0.2rem;
}

@media screen and (max-width: 756px) {
  .top-section-cont .text-col h3 {
    margin-top: 25px;
  }
}

@media screen and (min-width: 1080px) {
  .top-section-cont .text-col h3 {
    padding-right: 15%;
  }
}

.top-section-cont .text-col p {
  font-size: 16px;
  padding-top: 25px;
}

@media screen and (min-width: 1080px) {
  .top-section-cont .text-col p {
    padding-right: 30%;
  }
}
</style>
