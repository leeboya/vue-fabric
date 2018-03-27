import Vue from 'vue';
import Vuex from 'vuex';
import fabricObj from './modules/fabricObj'; //user
import user from './modules/user'; //user
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    fabricObj,
    user
  },
  getters
});

export default store
