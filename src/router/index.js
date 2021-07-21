import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "the-courses" */ '@/views/TheCourses.vue'),
    meta: {},
  },
  {
    path: '/courses/:courseId(\\d+)',
    name: 'course',
    component: () =>
      import(/* webpackChunkName: "the-course" */ '@/views/TheCourse.vue'),
    meta: {},
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "the-login" */ '@/views/TheLogin.vue'),
    meta: {},
  },
  {
    path: '/register',
    name: 'register',
    meta: {},
    component: () =>
      import(/* webpackChunkName: "the-register" */ '@/views/TheRegister'),
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: {},
    component: () =>
      import(
        /* webpackChunkName: "the-reset-password" */ '@/views/TheResetPassword'
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {},
    component: () =>
      import(/* webpackChunkName: "the-profile" */ '@/views/TheRrofile'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { layout: 'LayoutAdmin' },
    component: () =>
      import(
        /* webpackChunkName: "the-courses-list" */ '@/views/admin/TheCoursesList'
      ),
  },
  {
    path: '/admin/courses/:courseId(\\d+)',
    name: 'admin.course',
    meta: { layout: 'LayoutAdmin' },
    component: () =>
      import(/* webpackChunkName: "the-course" */ '@/views/admin/TheCourse'),
  },
  {
    path: '/admin/users',
    name: 'users',
    meta: { layout: 'LayoutAdmin' },
    component: () =>
      import(/* webpackChunkName: "the-users" */ '@/views/admin/TheUsers'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "the-not-found" */ '@/views/TheNotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authUser = store.getters['auth/authUser'];
  const reqAuth = to.meta.requiresAuth;
  const loginQuery = { name: 'login', query: { redirect: to.fullPath } };

  if (reqAuth && !authUser) {
    store.dispatch('auth/getAuthUser').then(() => {
      if (!store.getters['auth/authUser']) {
        next(loginQuery);
      } else {
        next();
      }
    });
  } else {
    next(); // обязательно всегда вызывайте next()!
  }
});

export default router;
