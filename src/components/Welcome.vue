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

<style scoped></style>
