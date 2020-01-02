import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  // font-awesome-icon tag
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faWifi)
library.add(faUnlockAlt)
library.add(faEye)
library.add(faEyeSlash)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

// library.add(faWifi)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
