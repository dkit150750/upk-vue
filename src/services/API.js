/*
 * Это начальный интерфейс API
 * мы задаем базовый URL-адрес для API
 */

import axios from 'axios';
import store from '@/store';

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api',
  withCredentials: true, // требуется для обработки токена CSRF
});

// Добавьте перехватчик ответов
apiClient.interceptors.response.use(
  function (response) {
    // Любой код состояния, который находится в диапазоне 2xx, вызывает срабатывание этой функции
    // Сделайте что-нибудь с данными ответа
    return response;
  },
  function (error) {
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
