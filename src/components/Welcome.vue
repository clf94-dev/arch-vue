<template>
  <b-container fluid>
    <b-row class="welcome-cont">
      <b-col class="text-col" xs="12" sm="12" md="7" lg="7">
        <h1>Welcome</h1>
        <h3>Welcome to Arch Studio</h3>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p></b-col
      >
      <b-col class="img-col" xs="12" sm="12" md="5" lg="5">
        <img :src="welcomeD" alt="Welcome"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      welcomeD: require("@/assets/images/home/desktop/image-welcome.jpg"),
    };
  },
};
</script>

<style scoped>
.welcome-cont {
  padding: 5% 7%;
}

.welcome-cont .text-col {
  text-align: start;
}

.welcome-cont .text-col h1 {
  position: absolute;
  display: block;
  left: 10vw;
  font-weight: 500;
  letter-spacing: -0.8rem;
  font-size: 180px;
  z-index: -1 !important;
  color: #eeeff4;
}

@media screen and (max-width: 756px) {
  .welcome-cont .text-col h1 {
    display: none;
  }
}

@media screen and (max-width: 1080px) {
  .welcome-cont .text-col h1 {
    padding-top: 2%;
    font-size: 120px;
  }
}

.welcome-cont .text-col h3 {
  padding: 25% 7% 2% 6%;
  letter-spacing: -0.3rem;
  z-index: 2 !important;
  font-size: 56px;
  font-weight: 300;
}

@media screen and (min-width: 1080px) {
  .welcome-cont .text-col h3 {
    padding: 140px 3% 2% 32%;
  }
}

.welcome-cont .text-col p {
  padding: 1% 7% 2% 6%;
  font-size: 15px;
}

@media screen and (min-width: 1080px) {
  .welcome-cont .text-col p {
    padding: 1% 2% 2% 32%;
  }
}

.welcome-cont .img-col {
  width: 100%;
  text-align: center;
  display: block;
}

@media screen and (min-width: 800px) {
  .welcome-cont .img-col {
    width: 42%;
  }
}

@media screen and (max-width: 1080px) {
  .welcome-cont .img-col {
    display: none;
  }
}
</style>
