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
      import(/* webpackChunkName: "login-page" */ '@/views/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "register-page" */ '@/views/RegisterPage.vue'
      ),
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password-page" */ '@/views/ForgotPasswordPage.vue'
      ),
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    meta: { layout: 'LayoutDefault', middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "reset-password-page" */ '@/views/ResetPasswordPage.vue'
      ),
  },
  {
    path: '/verify-email',
    name: 'verifyEmail',
    meta: { layout: 'LayoutDefault', middleware: [auth] },
    component: () =>
      import(
        /* webpackChunkName: "verify-email-page" */ '@/views/VerifyEmailPage.vue'
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'LayoutDefault', middleware: [auth, email] },
    component: () =>
      import(/* webpackChunkName: "profile-page" */ '@/views/RrofilePage.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { layout: 'LayoutAdmin', middleware: [admin] },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/views/admin/HomePage.vue'),
  },
  {
    path: '/admin/courses/:courseId(\\d+)',
    name: 'admin.course',
    meta: { layout: 'LayoutAdmin', middleware: [admin] },
    component: () =>
      import(
        /* webpackChunkName: "courses-edit" */ '@/views/admin/CoursesEdit.vue'
      ),
  },
  {
    path: '/admin/users',
    name: 'users',
    meta: { layout: 'LayoutAdmin' },
    component: () =>
      import(
        /* webpackChunkName: "users-index" */ '@/views/admin/UsersIndex.vue'
      ),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    meta: { layout: 'LayoutDefault' },
    component: () =>
      import(
        /* webpackChunkName: "not-found-page" */ '@/views/NotFoundPage.vue'
      ),
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
