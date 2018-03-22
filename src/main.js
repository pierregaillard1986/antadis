// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// integration VueResource
import VueResource from 'vue-resource'

// integration axios
import axios from 'axios';

// integration jquery
import jQuery from 'jquery'
global.jQuery = jQuery

// integration bootstrap
let Bootstrap = require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.productionTip = false
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
