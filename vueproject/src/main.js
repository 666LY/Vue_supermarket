import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import hint from  '@/components/common/hint/index'
import FastClick from 'fastclick'
import vuelazyload from 'vue-lazyload'

const a = require('@/assets/img/cart/loading.png')

Vue.use(hint)

Vue.config.productionTip = false

const abc = new Vue()

Vue.prototype.$bus = abc

//移动端300ms延迟
FastClick.attach(document.body,);

//使用懒加载插件
Vue.use(vuelazyload,{
    loading: a
})

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app')
