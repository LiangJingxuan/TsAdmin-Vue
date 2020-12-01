import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { message, Modal } from 'ant-design-vue'

Vue.prototype.$message = message;
Vue.use(Modal);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
