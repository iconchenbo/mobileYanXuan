/*
* 入口JS
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'  //引入即可


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
