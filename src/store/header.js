const CHANGE_TITLE = "CHANGE_TITLE",
  RESET_TITLE = "RESET_TITLE",
  DEFAULT_TITLE = 'App'

export default {
  namespaced: true,
  state: {
    title: DEFAULT_TITLE,
  },
  getters: {
    title(state) {
      return state.title;
    }
  },
  mutations: {
    [CHANGE_TITLE](state, title) {
      state.title = title
    },
    [RESET_TITLE](state) {
      state.title = DEFAULT_TITLE
    }
  },
  actions: {
    setTitle({commit}, title) {
        commit(CHANGE_TITLE, title)
    },
    resetTitle({commit}) {
      commit(RESET_TITLE)
    }
  }
}