<template>
  <b-container fluid>
    <b-row class="team-cont">
      <b-col xs="12" sm="12" md="6" lg="6" class="title-col">
        <h3>The Leaders</h3>
      </b-col>
      <b-col xs="12" sm="12" md="6" lg="6" class="members-col">
        <b-row class="members-row">
          <b-col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            class="member-card"
            v-for="data of membersdata"
            v-bind:key="data.name"
          >
            <div class="card-col">
              <img :src="data.src" :alt="data.imgAlt" />
              <h3>{{ data.name }}</h3>
              <p>{{ data.position }}</p>

              <i :style="{ marginRight: '10px' }" class="fab fa-2x fa-linkedin"></i>
              <i class="fab fa-2x fa-twitter"></i>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TeamAbout",
  data() {
    return {
      membersdata: [
        {
          name: "Jake Richards",
          position: "Chief Architect",
          src: require("@/assets/images/about/desktop/avatar-jake.jpg"),
          imgAlt: "Jake Richards",
        },
        {
          name: "Thompson Smith",
          position: "Head of Finance",
          src: require("@/assets/images/about/desktop/avatar-thompson.jpg"),
          imgAlt: "Thompson Smith",
        },
        {
          name: "Jackson Rourke",
          position: "Lead Designer",
          src: require("@/assets/images/about/desktop/avatar-jackson.jpg"),
          imgAlt: "Jackson Rourke",
        },
        {
          name: "Maria Simpson",
          position: "Senior Architect",
          src: require("@/assets/images/about/desktop/avatar-maria.jpg"),
          imgAlt: "Maria Simpson",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
