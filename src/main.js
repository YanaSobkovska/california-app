import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './plugins/normalize.scss'

import vuetify from './plugins/vuetify'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
const swiper = register();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  swiper,
  render: h => h(App)
}).$mount('#app')
