<template>
  <b-container fluid class="footer-cont">
    <b-row>
      <b-col class="logo-cont" xs="12" sm="12" md="2" lg="2">
        <img :src="archLogoW" alt="Arch" @click=" scrollToTop(), goToHome()" />
      </b-col>
      <b-col class="links-col" xs="12" sm="12" md="2" lg="2">
        <a @click=" scrollToTop(),goToPortfolio()">Portfolio</a>
      </b-col>
      <b-col class="links-col" xs="12" sm="12" md="2" lg="2">
        <a @click=" scrollToTop(), goToAbout()">About</a>
      </b-col>
      <b-col class="links-col" xs="12" sm="12" md="2" lg="2">
        <a @click=" scrollToTop(), goToContact()">Contact</a>
      </b-col>
      <b-col class="btn-col" xs="12" sm="12" md="2" lg="2">
        <button @click=" scrollToTop(), goToPortfolio()">See Our Portfolio</button>
      </b-col>
    
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
  methods: {
        scrollToTop() {
                window.scrollTo(0,0);
           },
    goToHome() {
      this.$router.push("/home");
    },
    goToPortfolio() {
      this.$router.push("/portfolio");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToContact() {
      this.$router.push("/contact");
    }
       
        
  },
  data() {
    return {
      archLogoW: require("@/assets/images/logo copy.svg"),
    };
  },
};
</script>

<style scoped>
.footer-cont {
  padding: 3% 7% 0 7%;
  text-align: center;
  align-items: center;
  text-decoration: none !important;
}

.footer-cont .logo-cont {
  background-color: black;
  padding: 4.2% 0;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .footer-cont .logo-cont {
    width: 16%;
  }
}

.footer-cont .logo-cont img:hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-cont .links-col {
  background-color: #eeeff4;
  padding: 5% 3%;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .footer-cont .links-col {
    width: 16%;
  }
}

.footer-cont .links-col a {
  font-size: 14px;
  color: #707070;
  cursor: pointer;
}

.footer-cont .links-col a:hover {
  color: black;
}

.footer-cont .btn-col {
  background-color: #eeeff4;
  padding: 3.8% 0;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .footer-cont .btn-col {
    width: 36%;
  }
}

.footer-cont .btn-col button {
  width: 250px;
  height: 60px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  align-items: center !important;
  border: 1px solid black;
  margin-left: 50%;
  z-index: 100  !important;
}

@media screen and (max-width: 600px) {
  .footer-cont .btn-col button {
    margin-left: 0%;
  }
}
.footer-cont .btn-col button img {
  padding-top: 5px;
  padding-left: 20px;
  height: 20px;
}

.footer-cont .btn-col button:hover {
  background-color: #707070;
  color: white;
  border-color: #707070;
}
</style>
