const GO_NEXT = "GO_NEXT",
  GO_PREV = "GO_PREV",
  RESET_PAGE= 'RESET_PAGE';

export default {
  namespaced: true,
  state: {
    currentPage: 1
  },
  getters: {
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
    resetCurrentPage({commit}) {
        commit(RESET_PAGE);
    }
  }
}