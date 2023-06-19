import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('../views/PointsView.vue')
    },
    {
      path: '/point',
      name: 'point',
      component: () => import('../views/PointView.vue')
    },
    {
      path: '/point/:id',
      name: 'point',
      component: () => import('../views/PointView.vue')
    },
    {
      path: '/foods',
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
