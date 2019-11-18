import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // 这个store就是new Vue.$store, 会在所有的组件中申明一个属性$store
  render: h => h(App)
}).$mount('#app')
