import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'  

import Home from './components/pages/Home.vue'
import Portfolio from './components/pages/Portfolio.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'

import Vuelidate from 'vuelidate';

import AOS from "aos";
import "aos/dist/aos.css";
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes =[
  {path:'/', component: Home},
  {path:'/home', component: Home},
  {path:'/portfolio', component: Portfolio},
  {path:'/about', component: About},
  {path:'/contact', component: Contact},
];

const router=new VueRouter({
routes,mode:'history'
})

new Vue({router,
  render: h => h(App),
  created(){
    AOS.init();
  }
}).$mount('#app')
