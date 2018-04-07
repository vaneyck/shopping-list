import Vue from 'nativescript-vue';
import store from './store';
import firebase from 'nativescript-plugin-firebase';

import LandingPage from './components/LandingPage';

import './styles.scss';

Vue.config.debug = true;
Vue.config.silent = false;
Vue.prototype.$store = store;

firebase.init({
  // TODO Add properties for database e.t.c.
}).then(function (instance) {
  console.log('firebase.init.done')
},
function (error) {
  console.log('firebase.init.error : ' + error);
})

new Vue({
  render: h => h(LandingPage),
}).$start();
