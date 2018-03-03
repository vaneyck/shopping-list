import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import shopping from './modules/shopping';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    shopping,
  },
  strict: debug,
});
