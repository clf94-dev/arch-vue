<template>
  <b-container fluid>
    <b-row class="intro-cont">
      <b-col class="img-col" xs="12" sm="12" md="12" lg="12">
        <img
          :src="introdata[page].srcD"
          :srcset="`${introdata[page].srcD} 1000w, ${introdata[page].srcT} 780w,${introdata[page].srcM} 480w,`"
          :alt="introdata[page].imgAlt"
        />
      </b-col>
      <b-col class="text-col" xs="12" sm="12" md="12" lg="12">
        <h1>{{ introdata[page].title }}</h1>
        <p>{{ introdata[page].text }}</p>
        <button @click="goToPortfolio()">See Our Portfolio</button>
      </b-col>
    </b-row>
    <b-row class="btn-row">
      <div
        class="btn"
        @click="goToPage1()"
        :style="{
          backgroundColor: page === 0 ? 'black' : 'white',
          color: page === 0 ? 'white' : 'black',
        }"
      >
        <h3>01</h3>
      </div>
      <div
        class="btn"
        @click="goToPage2()"
        :style="{
          backgroundColor: page === 1 ? 'black' : 'white',
          color: page === 1 ? 'white' : 'black',
        }"
      >
        <h3>02</h3>
      </div>
      <div
        class="btn"
        @click="goToPage3()"
        :style="{
          backgroundColor: page === 2 ? 'black' : 'white',
          color: page === 2 ? 'white' : 'black',
        }"
      >
        <h3>03</h3>
      </div>
      <div
        class="btn"
        @click="goToPage4()"
        :style="{
          backgroundColor: page === 3 ? 'black' : 'white',
          color: page === 3 ? 'white' : 'black',
        }"
      >
        <h3>04</h3>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HomeIntro",
  data() {
    return {
      page: 0,
      introdata: [
        {
          title: "Project Paramour",
          text:
            "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
          srcD: require("@/assets/images/home/desktop/image-hero-paramour.jpg"),
          srcT: require("@/assets/images/home/tablet/image-hero-paramour.jpg"),
          srcM: require("@/assets/images/home/mobile/image-hero-paramour.jpg"),
          imgAlt: "Project Paramour",
        },
        {
          title: "Seraph Station",
          text:
            "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
          srcD: require("@/assets/images/home/desktop/image-hero-seraph.jpg"),
          srcT: require("@/assets/images/home/tablet/image-hero-seraph.jpg"),
          srcM: require("@/assets/images/home/mobile/image-hero-seraph.jpg"),
          imgAlt: "Seraph Station",
        },
        {
          title: "Federal II Tower",
          text:
            "A sequel theme project for a tower originally built in the 1800s. We achieved   this with a striking look of brutal minimalism with modern touches.",
          srcD: require("@/assets/images/home/desktop/image-hero-federal.jpg"),
          srcT: require("@/assets/images/home/tablet/image-hero-federal.jpg"),
          srcM: require("@/assets/images/home/mobile/image-hero-federal.jpg"),
          imgAlt: "Federal II Tower",
        },
        {
          title: "Trinity Bank Tower",
          text:
            "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
          srcD: require("@/assets/images/home/desktop/image-hero-trinity.jpg"),
          srcT: require("@/assets/images/home/tablet/image-hero-trinity.jpg"),
          srcM: require("@/assets/images/home/mobile/image-hero-trinity.jpg"),
          imgAlt: "Trinity Bank Tower",
        },
      ],
    };
  },
  methods: {
    goToPortfolio() {
      this.$router.push("/portfolio");
    },
    goToPage1() {
      this.page = 0;
    },
    goToPage2() {
      this.page = 1;
    },
    goToPage3() {
      this.page = 2;
    },
    goToPage4() {
      this.page = 3;
    },
  },
};
</script>

<style scoped></style>
