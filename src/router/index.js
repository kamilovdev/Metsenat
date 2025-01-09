import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          name: 'dashboard',
          meta: { layout: "Defoult" },
          component: DashboardPage,
        },
      
      ]
})

export default router
