import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/partytownComponent'
// import './assets/main.scss'
// import { partytownSnippet, SCRIPT_TYPE } from '@builder.io/partytown/integration'

Vue.config.productionTip = false

// partytownSnippet({
//   forward: ['dataLayer.push'],
//   logCalls: true,
//   logGetters: true,
//   logSetters: true,
//   logStackTraces: false,
//   logScriptExecution: true,
//   logMainAccess: true,
// })

// console.log(partytownSnippet)

// const Helper = {
//   install(Vue) {
//     Vue.prototype.scriptType = SCRIPT_TYPE
//   }
// }
// Vue.use(Helper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
