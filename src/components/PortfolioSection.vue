<template>
    <b-container fluid>
        <b-row class="feat-proj-row">
<b-col v-for="data of portfoliodata" v-bind:key="data.title" class="project-card-cont" xs="12" sm="12" md="12" lg="4">
<img :src="data.srcD" :srcset="`${data.srcD} 1000w, ${data.srcT} 900w, ${data.srcM} 600w`" :alt="data.imgAlt" />
            <div class="project-card-text">
                <h3 :style="{ color: i === 0 || i===3||i===6? 'black' : '#EEEFF4' }">
                    {{ data.title }}
                </h3>
                <p :tyle="{ color: i === 0 || i===3||i===6? 'black' : '#EEEFF4'}">{{ data.text }}</p>

            </div>
    
</b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'PortfolioSection',
        data() {
            return{
                portfoliodata: [{
                    title: "Seraph Station",
                    text: "September 2019",
                    srcD: require("@/assets/images/home/desktop/image-hero-seraph.jpg") ,
                    srcT: require("@/assets/images/home/tablet/image-hero-seraph.jpg") ,
                    srcM: require("@/assets/images/home/mobile/image-hero-seraph.jpg") ,
                    imgAlt: "Seraph Station",

                },{
                    title: "Eebox Building",
                    text: "August 2017",
                    srcD: require("@/assets/images/portfolio/desktop/image-eebox.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-eebox.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-eebox.jpg") ,
                    imgAlt: "Eebox Building",

                },{
                    title: "Federal II Tower",
                    text: "March 2017",
                    srcD: require("@/assets/images/home/desktop/image-hero-federal.jpg") ,
                    srcT: require("@/assets/images/home/tablet/image-hero-federal.jpg") ,
                    srcM: require("@/assets/images/home/mobile/image-hero-federal.jpg") ,
                    imgAlt: "Federal II Tower",

                },{
                    title: "Project Del Sol",
                    text: "January 2016",
                    srcD: require("@/assets/images/portfolio/desktop/image-del-sol.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-del-sol.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-del-sol.jpg") ,
                    imgAlt: "Project Del Sol",

                },{
                    title: "Le Prototype",
                    text: "October 2015",
                    srcD: require("@/assets/images/portfolio/desktop/image-prototype.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-prototype.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-prototype.jpg") ,
                    imgAlt: "Le Prototype",

                },{
                    title: "228B Tower",
                    text: "April 2015",
                    srcD: require("@/assets/images/portfolio/desktop/image-228b.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-228b.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-228b.jpg") ,
                    imgAlt: "228B Tower",

                },{
                    title: "Grand Edelweiss Hotel",
                    text: "December 2013",
                    srcD: require("@/assets/images/portfolio/desktop/image-edelweiss.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-edelweiss.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-edelweiss.jpg") ,
                    imgAlt: "Grand Edelweiss Hotel",

                },{
                    title: "Netcry Tower",
                    text: "August 2012",
                    srcD: require("@/assets/images/portfolio/desktop/image-netcry.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-netcry.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-netcry.jpg") ,
                    imgAlt: "Netcry Tower",

                },{
                    title: "Hypers",
                    text: "January 2012",
                    srcD: require("@/assets/images/portfolio/desktop/image-hypers.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-hypers.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-hypers.jpg") ,
                    imgAlt: "Hypers",

                },{
                    title: "SXIV Tower",
                    text: "March 2011",
                    srcD: require("@/assets/images/portfolio/desktop/image-sxiv.jpg") ,
                    srcT: require("@/assets/images/portfolio/tablet/image-sxiv.jpg") ,
                    srcM: require("@/assets/images/portfolio/mobile/image-sxiv.jpg") ,
                    imgAlt: "SXIV Tower",

                },{
                    title: "Trinity Bank Tower",
                    text: "September 2010",
                    srcD: require("@/assets/images/home/desktop/image-hero-trinity.jpg") ,
                    srcT: require("@/assets/images/home/tablet/image-hero-trinity.jpg") ,
                    srcM: require("@/assets/images/home/mobile/image-hero-trinity.jpg") ,
                    imgAlt: "Trinity Bank Tower",

                },{
                    title: "Project Paramour",
                    text: "February 2008",
                    srcD: require("@/assets/images/home/desktop/image-hero-paramour.jpg") ,
                    srcT: require("@/assets/images/home/tablet/image-hero-paramour.jpg") ,
                    srcM: require("@/assets/images/home/mobile/image-hero-paramour.jpg") ,
                    imgAlt: "Project Paramour",

                }
                ]
            }
        }
    }
</script>

<style scoped>
.feat-proj-row {
  padding: 0 5% 0 7%;
  text-align: start;
}

.feat-proj-row .project-card-cont {
  width: 100%;
  padding: 2% 0%;
  overflow-x: hidden;
}

@media screen and (min-width: 1080px) {
  .feat-proj-row .project-card-cont {
    padding: 0 2%;
   
  }
}

@media screen and (min-width: 600px) {
  .feat-proj-row .project-card-cont {
    width: 33% !important;
  }
}

.feat-proj-row .project-card-cont img {
  width: 100%;
  height: 600px;
}

.feat-proj-row .project-card-cont .project-card-text {
  position: relative;
  top: -100px;
  padding-left: 30px;
  color: white;
}

.feat-proj-row .project-card-cont .project-card-text h3 {
  z-index: 1;
  font-size: 18px;
  font-weight: 300;
  color: #EEEFF4;
  padding-right: 30%;
  padding-bottom: 10px;
}

.feat-proj-row .project-card-cont .project-card-text p {
  font-size: 14px;
}

</style>