import Vue from 'vue'
import Router from 'vue-router'
import Home from 'site/home/home'
import Ticket from 'site/ticket/ticket'
import Mine from 'ucenter/mine/mine'
import Cart from 'ucenter/cart/cart'
import PersonalPro from 'ucenter/personal-pro/personal-pro'

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
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/personal-pro',
      name: 'PersonalPro',
      component: PersonalPro,
      meta: {
        keepAlive: true // 不需要被缓存
      }
    }
  ]
})
