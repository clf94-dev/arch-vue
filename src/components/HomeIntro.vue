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

<style scoped>
.intro-cont {
  padding: 3% 7% 5% 10%;
}

.intro-cont .text-col {
  width: 100%;
  position: absolute;
  top: 28vw;
  left: 20%;
  padding-right: 70% !important;
  font-weight: normal;
  color: #eeeff4;
  text-align: start;
}

@media screen and (max-width: 757px) {
  .intro-cont .text-col {
    position: absolute;
    top: 10%;
  }
}

.intro-cont .text-col h1 {
  font-size: 70px;
}

@media screen and (max-width: 756px) {
  .intro-cont .text-col h1 {
    font-size: 40px;
    padding-top: 60% !important;
  }
}

@media screen and (max-width: 1080px) {
  .intro-cont .text-col h1 {
    padding-top: 65% !important;
  }
}

.intro-cont .text-col p {
  font-size: 15px;
  padding-right: 20% !important;
  padding-bottom: 40px;
}

@media screen and (max-width: 757px) {
  .intro-cont .text-col p {
    font-size: 14px;
    padding-right: 5% !important;
  }
}

.intro-cont .text-col button {
  width: 250px;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  border: 1px solid black;
}

.intro-cont .text-col button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.intro-cont .text-col button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}

.intro-cont .img-col {
  width: 100%;
}

.intro-cont .img-col img {
  width: 100%;
}

.btn-row {
  position: absolute;
  top: 61.7vw;
  left: 160px;
}

@media screen and (max-width: 756px) {
  .btn-row {
    top: 85% !important;
  }
}

@media screen and (max-width: 1080px) {
  .btn-row {
    top: 120%;
  }
}

.btn-row .btn {
  background-color: white;
  border: 1px solid #707070;
  border-radius: 0;
  padding: 20px;
  cursor: pointer;
}

.btn-row .btn h3 {
  font-size: 12px;
}

.btn-row .btn:hover {
  background-color: #c8ccd8 !important;
}
</style>
