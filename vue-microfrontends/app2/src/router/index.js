import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/app2',
      component: () => import('../views/index.vue'),
      name: 'app2',
    },
  ],
})

export default router
