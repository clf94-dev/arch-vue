<template>
  <b-container fluid class="middle-cont">
    <b-row>
      <b-col xs="12" sm="12" md="6" lg="6" class="text-col">
        <h3>Our Heritage</h3>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p>
          Our small team of world-class professionals provides input on every
          project.
        </p></b-col
      >
      <b-col xs="12" sm="12" md="6" lg="6" class="img-col">
        <img :src="middleD" alt="Heritage"
      /></b-col> </b-row
  ></b-container>
</template>

<script>
export default {
  name: "AboutMiddle",
  data() {
    return {
      middleD: require("@/assets/images/about/desktop/image-heritage.jpg"),
    };
  },
};
</script>

<style scoped>
.middle-cont {
  padding: 5% 7% 5% 10%;
  text-align: start;
}

@media screen and (max-width: 1081px) {
  .middle-cont {
    padding: 4% 7% 4% 10%;
  }
}

.middle-cont .text-col {
  padding-top: 7%;
  padding-right: 15%;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .middle-cont .text-col {
    width: 50%;
  }
}

.middle-cont .text-col h3 {
  font-size: 56px;
  font-weight: 300;
  letter-spacing: -0.2rem;
  padding-bottom: 10px;
  padding-right: 50%;
}

.middle-cont .text-col p {
  font-size: 16px;
  padding-top: 20px;
}

.middle-cont .img-col {
  width: 100%;
  padding-left: 3.5%;
  overflow-x: hidden;
  display: block;
}

@media screen and (min-width: 800px) {
  .middle-cont .img-col {
    width: 50%;
  }
}

@media screen and (max-width: 757px) {
  .middle-cont .img-col {
    display: none;
  }
}
</style>
