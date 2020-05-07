const GO_NEXT = "GO_NEXT",
  GO_PREV = "GO_PREV",
  ADD_ERROR = "ADD_ERROR",
  RESET_PAGE= 'RESET_PAGE';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    errors: [],
    currentPage: 1
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    hasErrors(state) {
      return state.errors.length > 0;
    },
    errors(state) {
      return state.errors;
    },
    currentPage(state) {
      return state.currentPage;
    }
  },
  mutations: {
    [GO_NEXT](state) {
        state.currentPage++
    },
    [GO_PREV](state) {
        state.currentPage--
    },
    [ADD_ERROR](state, error) {
        state.errors.push(error)
    },
    [RESET_PAGE](state) {
        state.currentPage = 1
    }
  },
  actions: {
    next({commit}) {
        commit(GO_NEXT)
    },
    prev({commit}) {
      commit(GO_PREV);
    },
    addError({commit}, {error}) {
      commit(ADD_ERROR, error)
    },
    resetCurrentPage({commit}) {
        commit(RESET_PAGE);
    }
  }
}