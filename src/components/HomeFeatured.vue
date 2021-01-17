<template>
  <div>
    <h1>homefeatured component</h1>
  </div>
</template>

<script>
export default {
  name: "HomeFeatured",
  data() {
    return {
      homefeatured: [
        {
          title: "Project Del Sol",
          text: "",
          srcD: require("@/assets/images//portfolio/desktop/image-del-sol.jpg"),
          srcT: require("@/assets/images//portfolio/tablet/image-del-sol.jpg"),
          srcM: require("@/assets/images//portfolio/mobile/image-del-sol.jpg"),
          imgAlt: "Project Del Sol",
        },
        {
          title: "228B Tower",
          text: "",
          srcD: require("@/assets/images/portfolio/desktop/image-228b.jpg"),
          srcT: require("@/assets/images/portfolio/tablet/image-228b.jpg"),
          srcM: require("@/assets/images/portfolio/tablet/image-228b.jpg"),
          imgAlt: "228B Tower",
        },
        {
          title: "Le Prototype",
          text: "",
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
