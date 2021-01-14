import Vue from 'vue';
import App from './App.vue';
import jquery from 'jquery';
import store from './store/index';

Vue.prototype.$ = jquery;
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  jquery,
  store,
  render: h => h(App),
}).$mount('#app');
