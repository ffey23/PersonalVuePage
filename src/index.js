import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import axios from './plugins/axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

Vue.use(VueRouter)
Vue.use(axios)
Vue.use(VueSweetalert2)

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
})
