import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/app3',
      component: () => import('../views/index.vue'),
      name: 'app3',
    },
  ],
})

export default router
