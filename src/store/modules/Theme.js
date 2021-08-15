const state = () => ({
  theme: 'light',
});

const getters = {
  theme: (state) => {
    return state.theme;
  },
};

const actions = {
  setTheme({ commit }, value) {
    localStorage.setItem('theme', value);
    commit('SET_THEME', value);
  },
};

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
