<template>
  <b-container fluid class="featured-cont">
    <b-row class="feat-head-row">
      <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
        <h3>Featured</h3>
      </b-col>
      <b-col class="button-col" xs="12" sm="12" md="6" lg="6">
        <button @click="goToPortfolio()">See All</button>
      </b-col>
    </b-row>
    <b-row class="feat-proj-row">
      <b-col
        v-for="data of homefeatured"
        v-bind:key="data.title"
        class="project-card-cont"
        xs="12"
        sm="12"
        md="4"
        lg="4"
      >
        <img
          :src="data.srcD"
          :srcset="`${data.srcD} 1000w, ${data.srcT} 900w, ${data.srcM} 480w`"
          :alt="data.imgAlt"
        />
        <h1>{{ data.index }}</h1>
        <div class="project-card-text">
          <h3 :style="{ color: data.index === 0 ? 'black' : '#EEEFF4' }">
            {{ data.title }}
          </h3>
          <button
            @click="goToPortfolio()"
            :style="{
              color: data.index === 0 ? 'black' : '#EEEFF4',
              borderColor: data.index === 0 ? 'black' : '#EEEFF4',
            }"
          >
            View All Projects
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HomeFeatured",
  data() {
    return {
      homefeatured: [
        {
          title: "Project Del Sol",
          index: 1,
          srcD: require("@/assets/images/portfolio/desktop/image-del-sol.jpg"),
          srcT: require("@/assets/images/portfolio/tablet/image-del-sol.jpg"),
          srcM: require("@/assets/images/portfolio/mobile/image-del-sol.jpg"),
          imgAlt: "Project Del Sol",
        },
        {
          title: "228B Tower",
          index: 2,
          srcD: require("@/assets/images/portfolio/desktop/image-228b.jpg"),
          srcT: require("@/assets/images/portfolio/tablet/image-228b.jpg"),
          srcM: require("@/assets/images/portfolio/mobile/image-228b.jpg"),
          imgAlt: "228B Tower",
        },
        {
          title: "Le Prototype",
          index: 3,
          srcD: require("@/assets/images/portfolio/desktop/image-prototype.jpg"),
          srcT: require("@/assets/images/portfolio/tablet/image-prototype.jpg"),
          srcM: require("@/assets/images/portfolio/mobile/image-prototype.jpg"),
          imgAlt: "Le Prototype",
        },
      ],
    };
  },
  methods: {
    goToPortfolio() {
      this.$router.push("/portfolio");
    },
  },
};
</script>

<style scoped>
.featured-cont {
  padding: 5% 7%;
}

.featured-cont .feat-head-row {
  padding: 2% 0;
}

.featured-cont .feat-head-row .title-col {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .featured-cont .feat-head-row .title-col {
    width: 50%;
  }
}

.featured-cont .feat-head-row .title-col h3 {
  font-size: 56px;
}

.featured-cont .feat-head-row .button-col {
  width: 100%;
  text-align: end;
}

@media screen and (min-width: 800px) {
  .featured-cont .feat-head-row .button-col {
    width: 50%;
  }
}

.featured-cont .feat-head-row .button-col button {
  width: 180px;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid black;
}

@media screen and (max-width: 757px) {
  .featured-cont .feat-head-row .button-col button {
    display: none;
  }
}

@media screen and (min-width: 1080px) {
  .featured-cont .feat-head-row .button-col button {
    width: 250px;
  }
}

.featured-cont .feat-head-row .button-col button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.featured-cont .feat-head-row .button-col button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}

.featured-cont .mobile-btn button {
  margin-top: 20px;
  width: 757% !important;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid black;
}

@media screen and (min-width: 757px) {
  .featured-cont .mobile-btn button {
    display: none;
  }
}

.featured-cont .mobile-btn button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.featured-cont .mobile-btn button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}

.featured-cont .feat-proj-row .project-card-cont {
  width: 400px;
  padding: 2% 0;
  overflow-x: hidden;
}

@media screen and (min-width: 800px) {
  .featured-cont .feat-proj-row .project-card-cont {
    width: 530px;
  }
}

@media screen and (min-width: 1080px) {
  .featured-cont .feat-proj-row .project-card-cont {
    padding: 0 2%;
  }
}

.featured-cont .feat-proj-row .project-card-cont img {
  z-index: -1;
}

@media screen and (max-width: 1500px) {
  .featured-cont .feat-proj-row .project-card-cont img {
    width: 155%;
    height: 400px;
  }
}

@media screen and (max-width: 756px) {
  .featured-cont .feat-proj-row .project-card-cont img {
    width: 120%;
  }
}

@media screen and (min-width: 1500px) {
  .featured-cont .feat-proj-row .project-card-cont img {
    width: 100%;
    height: 600px;
  }
}

.featured-cont .feat-proj-row .project-card-cont h1 {
  font-family: sans-serif;
  font-weight: 300;
  color: #eeeff4;
}

@media screen and (max-width: 1080px) {
  .featured-cont .feat-proj-row .project-card-cont h1 {
    position: absolute;
    left: 70%;
    margin-top: -32%;
    font-size: 150px;
  }
}

@media screen and (max-width: 756px) {
  .featured-cont .feat-proj-row .project-card-cont h1 {
    display: none;
    position: absolute;
    left: 30%;
    padding-left: 17%;
  }
}

@media screen and (min-width: 1080px) {
  .featured-cont .feat-proj-row .project-card-cont h1 {
    padding-left: 20%;
    position: relative;
    top: -65%;
    font-size: 200px;
  }
}

@media screen and (min-width: 1080px) {
  .featured-cont .feat-proj-row .project-card-cont .project-card-text {
    position: relative;
    top: -40%;
    padding-left: 30px !important;
    text-align: start;
  }
}

@media screen and (max-width: 1080px) {
  .featured-cont .feat-proj-row .project-card-cont .project-card-text {
    position: absolute;
    margin-top: -10%;
    left: 12%;
    text-align: start;
  }
}

@media screen and (max-width: 756px) {
  .featured-cont .feat-proj-row .project-card-cont .project-card-text {
    position: absolute;
    margin-top: -20%;
    left: 12%;
  }
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button {
  width: 250px;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid black;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text h3 {
  z-index: 1;
  font-size: 18px;
  font-weight: 300;
  color: #eeeff4;
  padding-right: 60%;
  padding-bottom: 10px;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button {
  z-index: 1;
  width: 250px;
  height: 30px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid white;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.featured-cont .feat-proj-row .project-card-cont .project-card-text button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}
</style>
