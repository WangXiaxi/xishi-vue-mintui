// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastclick from 'fastclick'
import '@/common/stylus/index.styl'
import '@/common/js/reset.js'

import { Swipe, SwipeItem, Indicator, Lazyload, MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.loading = Indicator
Vue.prototype.$msg = MessageBox
Vue.use(Lazyload)

// 引入http库
Vue.prototype.$axios = axios

// 引入fastclick
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
