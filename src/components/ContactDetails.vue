<template>
  <b-container fluid class="contact-info-cont">
    <b-row class="contact-row">
      <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
        <h3>Contact Details</h3>
      </b-col>
      <b-col class="info-cont" xs="12" sm="12" md="6" lg="6">
        <b-row class="info-card" v-for="data of contactdetails" v-bind:key="data.office">
          <ContactInfoCard :info="data"></ContactInfoCard>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContactInfoCard from "./ContactInfoCard.vue";
export default {
  name: "ContactDetails",
  components: {
    ContactInfoCard,
  },
  data() {
    return {
      contactdetails: [
        {
          office: "Main Office",
          mail: "Mail :			archone@mail.com",
          address: "Address :		1892  Chenoweth Drive TN",
          phone: "Phone :		123-456-3451",
        },
        {
          office: "Office II",
          mail: "Mail :			archtwo@mail.com",
          address: "Address :		3399  Wines Lane TX",
          phone: "Phone :		832-123-4321",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
