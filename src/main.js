import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/partytownComponent'
// import './assets/main.scss'
import Partytown from './utils/partytown'

Vue.config.productionTip = false

// partytown integration
Partytown()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
