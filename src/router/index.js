import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component:()=> import('../views/ServiceView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component:()=> import('../views/MenuView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component:()=> import('../views/ContactView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component:()=> import('../views/TeamView.vue')
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component:()=> import('../views/TestimonialView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=> import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=> import('../views/auth/RegisterView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component:()=> import('../views/auth/ForgotPView.vue')
    }

  ]
})

export default router
