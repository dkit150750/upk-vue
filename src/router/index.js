import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/TheCourses.vue'),
    meta: {},
  },
  {
    path: '/courses/:courseId(\\d+)',
    name: 'course',
    component: () => import('@/views/TheCourse.vue'),
    meta: {},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/TheLogin.vue'),
    meta: {},
  },
  {
    path: '/register',
    name: 'register',
    meta: {},
    component: () => import('@/views/TheRegister'),
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: {},
    component: () => import('@/views/TheResetPassword'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
