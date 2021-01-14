<template>
  <div class="info-card">
    <p>{{ info.office }}</p>
    <p>{{ info.mail }}</p>
    <p>{{ info.address }}</p>
    <p>{{ info.phone }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactInfoCard",
  props: ["info"],
};
</script>

<style scoped></style>
