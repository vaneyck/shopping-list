import Vue from 'nativescript-vue';
import store from './store';

import LandingPage from './components/LandingPage';

import './styles.scss';

Vue.config.debug = true;
Vue.config.silent = false;
Vue.prototype.$store = store;

new Vue({
  render: h => h(LandingPage),
}).$start();
