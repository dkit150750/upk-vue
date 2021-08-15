import { getErrorData } from '@/utils/helpers.js';
import AuthService from '@/services/AuthService.js';

const state = () => ({
  user: null,
  loading: false,
  error: null,
});

const getters = {
  authUser: (state) => {
    return state.user;
  },
  isAdmin: (state) => {
    return state.user ? state.user.isAdmin : false;
  },
  isEmailVerified: (state) => {
    if (!state.user) {
      return false;
    }
    if (state.user.emailVerified) {
      return true;
    }
    return false;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
  loggedIn: (state) => {
    return !!state.user;
  },
  guest: () => {
    const storageItem = window.localStorage.getItem('guest');

    if (!storageItem) {
      return false;
    }

    if (storageItem === 'isNotGuest') {
      return false;
    }

    if (storageItem === 'isGuest') {
      return true;
    }
  },
};

const actions = {
  async logout({ commit, dispatch }) {
    try {
      await AuthService.logout();
      commit('SET_USER', null);
      dispatch('setGuest', { value: 'isGuest' });
    } catch (error) {
      commit('SET_ERROR', getErrorData(error));
    }
  },

  async getAuthUser({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await AuthService.getAuthUser();
      commit('SET_USER', response.data.data);
    } catch (error) {
      commit('SET_USER', null);
      commit('SET_ERROR', getErrorData(error));
    } finally {
      commit('SET_LOADING', false);
    }
  },

  setGuest(context, { value }) {
    window.localStorage.setItem('guest', value);
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
