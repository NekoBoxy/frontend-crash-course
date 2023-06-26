import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // 路由可接受 /points 或 /points/:city
    {
      path: '/points/:city?',
      name: 'points',
      component: () => import('../views/PointsView.vue')
    },
    {
      path: '/point/:id',
      name: 'point',
      component: () => import('../views/PointView.vue')
    },
    {
      path: '/foods/:city?',
      name: 'foods',
      component: () => import('../views/FoodsView.vue')
    },
    {
      path: '/food/:id',
      name: 'food',
      component: () => import('../views/FoodView.vue')
    },
  ]
})

export default router
