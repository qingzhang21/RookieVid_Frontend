import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import axios from 'axios';

axios.defaults.baseURL='http://101.43.159.45:8000/api'
Vue.prototype.$http=axios;

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
// import axios from 'axios';
// Vue.prototype.$axios = axios; //这样每个Vue文件内都可以直接使用



Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url:'', //链接
//   //method:'get'
//   //下面是专门针对get请求的参数拼接，例如？
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{ 
//   console.log(res);
// })

// axios.get()

// //axios发送并发请求
// //axios()中的是config
// axios.all([axios({
//   url:''
// }),axios({
//   url:'',
//   params:{
//     type:'sell',
//     page:4
//   }
// })]).then(results=>{
//   console.log(results);
// })