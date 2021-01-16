<template>
  <b-container fluid>
    <b-row class="team-cont">
      <b-col xs="12" sm="12" md="12" lg="6" class="title-col">
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
              <b-row class="icon-row"
                ><i
                  :style="{ marginRight: '10px' }"
                  class="fab fa-2x fa-linkedin logo"
                ></i>
                <i class="fab fa-2x fa-twitter logo"></i
              ></b-row>
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

<style scoped>
.team-cont {
  padding: 5% 7% 5% 9% !important;
}

.team-cont .title-col {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .team-cont .title-col {
    width: 50%;
  }
}

.team-cont .title-col h3 {
  font-size: 56px;
  font-weight: 300;
  letter-spacing: -0.2rem;
  padding-bottom: 10px;
  text-align: start;
}

.team-cont .members-col {
  width: 100%;
}

@media screen and (min-width: 757px) {
  .team-cont .members-col {
    justify-content: space-evenly !important;
  }
}

@media screen and (min-width: 800px) {
  .team-cont .members-col {
    width: 50%;
  }
}
.team-cont .members-col .member-card {
  width: 100%;
}

.team-cont .members-col .member-card .card-col {
  width: 350px;
  margin-right: 35px;
  margin-bottom: 50px !important;
}
@media screen and (min-width: 800px) {
  .team-cont .members-col .member-card .card-col {
    width: 100%;
  }
}
.team-cont .members-col .member-card .card-col img {
  width: 350px;
}

.team-cont .members-col .member-card .card-col h3 {
  width: 250px;
  padding-top: 15px;
  text-align: start;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 5px;
}

.team-cont .members-col .member-card .card-col p {
  font-size: 16px;
  width: 250px;
  text-align: start;
  margin-bottom: 10px;
}

.team-cont .members-col .member-card .card-col .logo {
  display: flex !important;
  cursor: pointer;
  color: #000000;
}
.icon-row {
  margin-left: 0;
  margin-right: 0;
}
</style>
