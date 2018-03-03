import Vue from 'nativescript-vue';
import App from './App';
import store from './store';

import './styles.scss';

new Vue({
  store,
  render: h => h(App),
}).$start();
