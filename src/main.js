import Vue from 'vue'
import App from './App.vue'
import AppCars from './components/AppCars'
import VueRouter from 'vue-router'

const routes = [
  { path:'', redirect:'/cars'},
  { path:'/cars', name: 'cars', component: AppCars }
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
