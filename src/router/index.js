import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboardPage.vue'
import sponsor from '../pages/sponsor.vue'
import talaba from '../pages/talaba.vue'
import sponsorSingle from '../components/sponsors/sponsorSingle.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          name: 'dashboard',
          meta: { layout: "Defoult" },
          component: DashboardPage,
        },
        {
          path: '/sponsor',
          name: 'sponsor',
          meta: {layout: "Defoult"},
          component: sponsor
        },
        {
          path: '/talabalar',
          name: 'talabalar',
          meta: {layout: "Defoult"},
          component: talaba
        },
        {
          path: '/sponsor/:id',
          name: 'sponsorSingle',
          meta: {layout: "Empty"},
          component: sponsorSingle
        },
      
      ]
})

export default router
