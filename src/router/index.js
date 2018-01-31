import Vue from 'vue'
import Router from 'vue-router'
import Home from 'site/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
