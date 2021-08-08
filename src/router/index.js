import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
import auth from '@/middleware/auth';
import email from '@/middleware/email';
import admin from '@/middleware/admin';
import guest from '@/middleware/guest';
import middlewarePipeline from '@/router/middlewarePipeline';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/views/HomePage.vue'),
  },
  {
    path: '/courses/:courseId(\\d+)',
    name: 'course',
    meta: {},
    component: () =>
      import(/* webpackChunkName: "the-course" */ '@/views/TheCourse.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "the-login" */ '@/views/TheLogin.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "the-register" */ '@/views/TheRegister'),
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "the-forgot-password" */ '@/views/TheForgotPassword'
      ),
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "the-reset-password" */ '@/views/TheResetPassword'
      ),
  },
  {
    path: '/verify-email',
    name: 'verifyEmail',
    meta: { middleware: [auth] },
    component: () =>
      import(
        /* webpackChunkName: "the-verify-email" */ '@/views/TheVerifyEmail'
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { middleware: [auth, email] },
    component: () =>
      import(/* webpackChunkName: "the-profile" */ '@/views/TheRrofile'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { layout: 'LayoutAdmin', middleware: [admin] },
    component: () =>
      import(/* webpackChunkName: "the-courses" */ '@/views/admin/TheCourses'),
  },
  {
    path: '/admin/courses/:courseId(\\d+)',
    name: 'admin.course',
    meta: { layout: 'LayoutAdmin', middleware: [admin] },
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

// router.beforeEach((to, from, next) => {
//   const authUser = store.getters['auth/authUser'];
// const reqAuth = to.meta.requiresAuth;
//   const loginQuery = { name: 'login', query: { redirect: to.fullPath } };

//   if (reqAuth && !authUser) {
//     store.dispatch('auth/getAuthUser').then(() => {
//       if (!store.getters['auth/authUser']) {
//         next(loginQuery);
//       } else {
//         next();
//       }
//     });
//   } else {
//     next(); // обязательно всегда вызывайте next()!
//   }
// });

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
