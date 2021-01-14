<template>
  <div>
    <TopContact></TopContact>
    <ContactDetails></ContactDetails>
    <MapImg></MapImg>
    <Form></Form>
  </div>
</template>

<script>
import TopContact from "../TopContact.vue";
import ContactDetails from "../ContactDetails.vue";
import MapImg from "../MapImg.vue";
import Form from "../Form.vue";
export default {
  name: "Contact",
  components: {
    TopContact,
    ContactDetails,

    MapImg,
    Form,
  },
};
</script>

<style scoped></style>
