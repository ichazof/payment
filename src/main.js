import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/lib/date-picker/style/css'
import 'ant-design-vue/lib/calendar/style/css'
require('bootstrap/dist/css/bootstrap.min.css')

new Vue({
  el: '#app',
  render: h => h(App)
})
