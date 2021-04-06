import Vue from 'vue'
import App from './App.vue'
import router from './router'

// const Content = () => import('app1/Content')
// const Button = () => import('app1/Button')

Vue.config.productionTip = false

// Vue.component('Content', Content)
// Vue.component('Button', Button)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
