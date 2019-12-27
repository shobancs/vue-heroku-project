import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueTelInput from 'vue-tel-input'


//import vuescroll from 'vue-scroll'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueTelInput,
  render: h => h(App)
}).$mount('#app')
