import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';

import LandingPage from './components/LandingPage';

import './styles.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/landingpage',
      component: LandingPage
    },
    { path: '*', redirect: '/landingpage' }
  ]
})

router.replace('/landingpage');

new Vue({
  router,
  store,
  render: h => h(App),
}).$start();
