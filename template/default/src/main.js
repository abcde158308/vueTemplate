import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiUrl from './api/apiUrl'
import { post, fetch, patch, put } from './api/index'
Vue.prototype.$apiUrl = apiUrl
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
