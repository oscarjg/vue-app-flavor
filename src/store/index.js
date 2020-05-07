import Vue from "vue";
import Vuex from "vuex";
import form from "./form";
import Header from "./header";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    form: form,
    header: Header,
  }
});