import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueTelInput from 'vue-tel-input'
import SocialSharing from 'vue-social-sharing'

Vue.use(Vuetify)
Vue.use(VueTelInput)
Vue.use(SocialSharing);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})