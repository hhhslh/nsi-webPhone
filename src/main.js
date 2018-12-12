// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import Index from '../src/components/index'


Vue.config.productionTip = false

axios.defaults.baseURL = "https://data.xinxueshuo.cn/nsi-1.0"
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Index },
    template: '<Index/>'
})