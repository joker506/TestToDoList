import Vue from "vue";
import Vuex from "vuex";
import todo from "@/store/todo";
import menu from "@/store/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  modules: {
    todo,
    menu,
  },
});
