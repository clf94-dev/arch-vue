<template>
  <nav class="navbar">
    <div class="navbar-cont">
      <div class="navbar-logo">
        <img :src="logo" alt="PhotoSnap" @click="goToHome()" />
      </div>
      <div class="menu-icon" >
          <button class="nav-btn" @click="handleClick()">
          <span key="bars" v-if="!click"> <i class="fas fa-bars"></i></span>
          <span key="cross" v-else><i class="fas fa-times"></i></span>
        </button>
      </div>
      <ul :class="click ? 'nav-menu active' : 'nav-menu'">
        <li class="nav-item"  @click="closeMobile()">
          <router-link to="/portfolio" :active-link="active" class="nav-links" 
            >Portfolio</router-link
          >
        </li>
        <li class="nav-item"  @click="closeMobile()">
          <router-link to="/about" :active-link="active" class="nav-links" 
            >About Us</router-link
          >
        </li>
        <li class="nav-item"  @click="closeMobile()">
          <router-link to="/contact" :active-link="active" class="nav-links"
            >Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
        closeMobile() {
      this.click = false;
    },
    handleClick() {
      this.click = !this.click;
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
  data() {
    return {
      logo: require("@/assets/images/logo.svg"),
      click: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 120px;
  display: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.navbar .navbar-cont {
  display: flex;
  justify-content: center;
  height: 120px;
  max-width: 1600px;
}

.menu-icon .nav-btn{
  border: none;
background-color: white ;
}
@media screen and (max-width: 756px) {
  .navbar .navbar-cont {
    height: 80px;
  }
}

.navbar .navbar-cont .navbar-logo {
  text-align: start;
  margin-left: 150px;
  margin-top: 30px;
  cursor: pointer;
  align-items: center;
}

@media screen and (max-width: 756px) {
  .navbar .navbar-cont .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10%, 0);
  }
}

.navbar .navbar-cont .navbar-logo img {
  align-self: start !important;
  height: 50%;
}

.navbar .navbar-cont .menu-icon {
  display: none;
}

@media screen and (max-width: 756px) {
  .navbar .navbar-cont .menu-icon {
    display: block;
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: 1.8rem;
    cursor: pointer;
  }
}

.navbar .navbar-cont .menu-icon .fa-bars,
.navbar .navbar-cont .menu-icon .fa-times {
  color: #000000;
}

.navbar .navbar-cont .nav-menu {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 60px;
  list-style: none;
  text-align: center;
  justify-content: start;
  margin-left: 70px;
  width: 70vw;
  align-items: center;
}

@media screen and (max-width: 756px) {
  .navbar .navbar-cont .nav-menu {
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    width: 80%;
    height: 39vh;
    position: absolute;
    top: 90px;
    left: 100%;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .navbar .navbar-cont .nav-menu.active {
    background-color: #c8ccd8;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .navbar .navbar-cont .nav-menu.active .nav-links:hover {
    color: #000000 !important;
  }
}

.navbar .navbar-cont .nav-menu .nav-links {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  color: #707070;
}
@media screen and (max-width: 756px)
{
  .navbar .navbar-cont .nav-menu .nav-links {
    padding: 0.5rem 3.5rem;
position: relative;
right: 20px;
  }
}
.navbar .navbar-cont .nav-menu .nav-links.router-link-active {
  color: black !important;
}
.navbar .navbar-cont .nav-menu .nav-links:hover {
  transition: all 0.2s ease-out;
}

.navbar .navbar-cont .nav-menu .nav-links-mobile {
  display: none;
}

.navbar .navbar-cont .nav-menu .nav-links .nav-item:hover {
  cursor: pointer;
  color: #000000 !important;
}
@media screen and (max-width: 756px)
{
.navbar .navbar-cont .nav-menu .nav-links .nav-item:hover {
  cursor: pointer;
  color: #000000 !important;
  border: 1px  solid #000000 !important;

}
}
</style>
