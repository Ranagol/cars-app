import Vue from 'vue'
import App from './App.vue'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'
import VueRouter from 'vue-router'

const routes = [
  { path:'', redirect:'/cars'},
  { path:'/cars', name: 'cars', component: AppCars },
  { path:'/add', name: 'add', component: AddCar },
  { path:'/edit/:id', name: 'edit', component: AddCar },
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
