import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import store from './store/index.js'
// import '..project_interno-cli/public/style.css'
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store)
}).$mount('#app')
