import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: (h) => h(App),
  router
})
