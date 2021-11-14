const todo = {
  namespaced: true,
  state: {
    listTodo: [
      { id: 0, name: "firstTodo", text: "lorem", selected: true },
      { id: 1, name: "secondTodo", text: "lorem", selected: false },
      { id: 2, name: "thirdTodo", text: "lorem", selected: false },
    ],
  },
  getters: {
    activeTodo: (state) => state.listTodo.filter((item) => !item.selected),
    compledTodo: (state) => state.listTodo.filter((item) => item.selected),
  },
  mutations: {
    SET_TODO_LIST(state, payload) {
      state.listTodo = payload;
    },
    NEW_TODO(state, payload) {
      state.listTodo.push({ ...payload, selected: false });
      localStorage.setItem("list", JSON.stringify(state.listTodo));
    },
    CHECK_TODO(state, payload) {
      state.listTodo = payload;
      localStorage.setItem("list", JSON.stringify(state.listTodo));
    },
  },
  actions: {
    getListTodo(context) {
      if (localStorage.getItem("list")) {
        const val = JSON.parse(localStorage.getItem("list"));
        context.commit("SET_TODO_LIST", val);
      }
    },
    setTodo(context, params) {
      setTimeout(() => {
        context.commit("NEW_TODO", params);
      }, 1000);
    },
    setCheckTodo(context, params) {
      setTimeout(() => {
        context.commit("CHECK_TODO", params);
      }, 1000);
    },
    removeCompled(context, params) {
      setTimeout(() => {
        context.commit("CHECK_TODO", params);
      }, 1000);
    },
  },
};
export default todo;
