import Vue from 'vue'
import Router from 'vue-router'
import Home from 'site/home/home'
import Ticket from 'site/ticket/ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
