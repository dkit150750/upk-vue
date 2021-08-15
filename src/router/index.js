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
    meta: { layout: 'LayoutDefault' },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/views/HomePage.vue'),
  },
  {
    path: '/courses/:courseId(\\d+)',
    name: 'course',
    meta: { layout: 'LayoutDefault' },
    component: () =>
      import(/* webpackChunkName: "courses-show" */ '@/views/CoursesShow.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "the-login" */ '@/views/TheLogin.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "the-register" */ '@/views/TheRegister'),
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "the-forgot-password" */ '@/views/TheForgotPassword'
      ),
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "the-reset-password" */ '@/views/TheResetPassword'
      ),
  },
  {
    path: '/verify-email',
    name: 'verifyEmail',
    meta: { layout: 'LayoutDefault', middleware: [auth] },
    component: () =>
      import(
        /* webpackChunkName: "the-verify-email" */ '@/views/TheVerifyEmail'
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'LayoutDefault', middleware: [auth, email] },
    component: () =>
      import(/* webpackChunkName: "profile-page" */ '@/views/RrofilePage'),
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
    meta: { layout: 'LayoutDefault' },
    component: () =>
      import(/* webpackChunkName: "the-not-found" */ '@/views/TheNotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

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
