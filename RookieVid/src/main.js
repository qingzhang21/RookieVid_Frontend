import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'
import axios from 'axios'
axios.defaults.baseURL='http://101.43.159.45:8000/api'
Vue.prototype.$http=axios;

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
