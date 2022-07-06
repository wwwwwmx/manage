import Vue from 'vue'
import App from './App.vue'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "../node_modules/aos/dist/aos.css"
import store from './store/index'
// import VueRouter from 'vue-router'
// import router from '../src/route'
import AOS from 'aos'
Vue.config.productionTip = false
Vue.use(Elementui)
Vue.use(AOS)
// Vue.use(VueRouter)
new Vue({
  store,
  // router,
  render: h => h(App),
}).$mount('#app')
