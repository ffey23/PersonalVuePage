import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import axios from './plugins/axios'
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

Vue.use(VueRouter)
Vue.use(axios)

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
})
