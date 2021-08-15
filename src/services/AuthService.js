import axios from 'axios';
import store from '@/store';

export const authClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // требуется для обработки токена CSRF
});

/*
 * Добавьте перехватчик ответов
 */
authClient.interceptors.response.use(
  function (response) {
    // Любой код состояния, который находится в диапазоне 2xx, вызывает срабатывание этой функции
    // Сделайте что-нибудь с данными ответа
    return response;
  },
  function (error) {
    console.log('ОШИБКА');
    console.log('error');
    console.log(error);
    console.log('error.response');
    console.log(error.response);
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters['auth/authUser'] &&
      !store.getters['auth/guest']
    ) {
      store.dispatch('auth/logout');
    }
    return Promise.reject(error);
  }
);

async function getCSRF() {
  try {
    await authClient.get('/sanctum/csrf-cookie');
  } catch (error) {
    console.log('CSRF не получен');
  }
}

getCSRF();

export default {
  registerUser(payload) {
    return authClient.post('/register', payload);
  },

  login(payload) {
    return authClient.post('/login', payload);
  },

  logout() {
    return authClient.post('/logout');
  },

  forgotPassword(payload) {
    return authClient.post('/forgot-password', payload);
  },

  resetPassword(payload) {
    return authClient.post('/reset-password', payload);
  },

  updatePassword(payload) {
    return authClient.put('/user/password', payload);
  },

  sendVerification(payload) {
    return authClient.post('/email/verification-notification', payload);
  },

  updateUser(payload) {
    return authClient.put('/user/profile-information', payload);
  },

  getAuthUser() {
    return authClient.get('/api/v1/users/auth');
  },
};
