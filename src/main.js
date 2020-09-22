import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
