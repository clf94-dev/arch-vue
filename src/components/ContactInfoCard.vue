<template>
  <div class="info-card">
    <p class="title">{{ info.office }}</p>
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

<style scoped>
.info-card {
  padding-bottom: 25px;
}

.info-card p {
  margin-bottom: 10px;
  text-align: start;
}

.info-card p.title {
  font-weight: 600;
}
</style>
