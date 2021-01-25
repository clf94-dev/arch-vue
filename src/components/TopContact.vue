<template>
  <b-container fluid class="top-section-cont">
    <b-row>
      <b-col class="img-col" xs="12" sm="12" md="6" lg="6">
        <img :src="topContactD" :srcset="`${topContactD} 1000w, ${topContactT} 900w, ${topContactM} 600w`" alt="About"
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
    topContactT: require("@/assets/images/contact/tablet/image-hero.jpg"),
    topContactM: require("@/assets/images/contact/mobile/image-hero.jpg"),
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
