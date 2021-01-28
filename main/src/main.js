import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
registerMicroApps([
  {
    name: 'vue-app', // app name registered
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/vue-app',
  },
  {
    name: 'vue-app2', // app name registered
    entry: '//localhost:7102',
    container: '#subapp-viewport',
    activeRule: '/vue-app2',
  },
]);
setDefaultMountApp('/vue-app');
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#appwww');
