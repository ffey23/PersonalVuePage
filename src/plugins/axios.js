import axios from 'axios'
import env from '../../.env'

const $axios = {
  install(Vue) {
    console.log(env.API_BASE_URL)
    Vue.prototype.$axios = axios.create({
      baseURL: env.API_BASE_URL
    })
  }
}

export default $axios
