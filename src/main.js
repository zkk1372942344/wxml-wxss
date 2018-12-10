// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

import "./assets/common.css";

//引入loading插件
import loading from "./plugins/loading.js";
Vue.use(loading);
//ajax插件
import ajax from "./plugins/ajax.js";
Vue.use(ajax);

//引入返回顶部组件
import toTop from "./components/toTop.vue";
Vue.component("toTop",toTop);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
