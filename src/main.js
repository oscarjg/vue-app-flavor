import Vue from 'vue'
import App from './App.vue'
import i18n from './translations'
import router from './router'
import store from './store'

import Header from './components/Header'
import HeaderForm from './components/HeaderForm'

Vue.config.productionTip = false

// Pre-load dinamic headers 
Vue.component('header-common', Header)
Vue.component('header-form', HeaderForm)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
