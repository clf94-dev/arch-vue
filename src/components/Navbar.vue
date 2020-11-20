<template>
  <nav class="navbar">
    <div class="navbar-cont">
      <div class="navbar-logo">
        <img :src="logo" alt="PhotoSnap" @click="goToHome()" />
      </div>
      <div class="menu-icon">
        <i class="fas fa-bars"></i>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-links">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-links">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-links">Contact </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
  },
  data() {
    return {
      logo: require("@/assets/images/logo.svg"),
    };
  },
};
</script>

<style scoped></style>
