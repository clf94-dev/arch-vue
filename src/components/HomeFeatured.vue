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
          :srcset="`${data.srcD} 1000w, ${data.srcT} 780w, ${data.srcM} 480w`"
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

<style scoped></style>
