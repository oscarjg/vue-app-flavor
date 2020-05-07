const GO_NEXT = "GO_NEXT",
  GO_PREV = "GO_PREV",
  RESET_PAGE= 'RESET_PAGE';

export default {
  namespaced: true,
  state: {
    currentStep: 1
  },
  getters: {
    currentStep(state) {
      return state.currentStep;
    }
  },
  mutations: {
    [GO_NEXT](state) {
        state.currentStep++
    },
    [GO_PREV](state) {
        state.currentStep--
    },
    [RESET_PAGE](state) {
        state.currentStep = 1
    }
  },
  actions: {
    next({commit}) {
        commit(GO_NEXT)
    },
    prev({commit}) {
      commit(GO_PREV);
    },
    resetCurrentState({commit}) {
        commit(RESET_PAGE);
    }
  }
}