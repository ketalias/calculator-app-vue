import { createStore } from "vuex";

export default createStore({
  state: {
    numbers: "",
  },
  mutations: {
    setNumbers(state, numbers) {
      state.numbers = numbers;
    },
  },
  actions: {
    updateNumbers({ commit }, numbers) {
      commit("setNumbers", numbers);
    },
  },
  getters: {
    getNumbers: (state) => state.numbers,
  },
});
