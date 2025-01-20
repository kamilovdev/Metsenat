import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboardPage.vue'
import sponsor from '../pages/sponsor.vue'
import student from '../pages/student.vue'
import studentSingle from '../components/students/studentSingle.vue'
import sponsorSingle from '../pages/sponsorPatners.vue'
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
          path: '/sponsor/:id',
          name: 'sponsor-single',
          meta: {layout: "Empty"},
          component: sponsorSingle
        },
        {
          path: '/student',
          name: 'student',
          meta: {layout: "Defoult"},
          component: student
        },
        {
          path: '/student/:id',
          name: 'student-single',
          meta: {layout: "Empty"},
          component: studentSingle
        }
      
      ]
})

export default router
