import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'  


import Vuelidate from 'vuelidate';

import AOS from "aos";
import "aos/dist/aos.css";
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes =[
  {path:'/', component: ''},
  {path:'/home', component: ''},
  {path:'/portfolio', component: ''},
  {path:'/about', component: ''},
  {path:'/contact', component: ''},
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
