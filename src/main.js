// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick'
import '@/common/stylus/index.styl'
import '@/common/js/reset.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入vuex
import store from './store'
// 头部进度条插件->用于切换页面时候
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Indicator, InfiniteScroll, Lazyload, MessageBox, Field } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.loading = Indicator
Vue.prototype.$msg = MessageBox
Vue.use(InfiniteScroll)
Vue.use(Lazyload)
require('swiper/dist/css/swiper.min.css')
Vue.use(VueAwesomeSwiper)
Vue.component(Field.name, Field)
// 引入http库
Vue.prototype.$axios = axios

// 路由拦截器,控制tabBar的显示隐藏
router.beforeEach((to, from, next) => {
  NProgress.start()
  let path = to.path
  if (path === '/' || path === '/home' || path === '/ticket' || path === '/mine') {
    store.commit('SET_FOOTERNAVSHOW', true)
  } else {
    store.commit('SET_FOOTERNAVSHOW', false)
  }
  next()
})
router.afterEach((to, from) => {
  // 路由跳转结束进度结束
  NProgress.done()
})
// 引入fastclick
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
