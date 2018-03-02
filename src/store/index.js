import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/login'; //user
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userInfo
  },
  getters
});

export default store
