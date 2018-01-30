<template>
  <div class="home">
    <div class="header">
      <router-link class="input" tag="div" to="/">
        <i class="mintui mintui-search">
        </i>
        搜索
      </router-link>
    </div>
    <div class="inner-box">
      <!-- 轮播展示 -->
      <div class="banner-swiper">
        <mt-swipe :auto="5000" :speed="300" :prevent="false" :stopPropagation="true" v-show="banner.length>0">
          <mt-swipe-item v-for="(item, index) in banner" :key="index">
            <router-link tag="div" to="item.url">
             <img :src="item.image" style="width: 100%; height: auto">
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 横向导航 -->
      <div class="home-nav">
        <router-link to="/">
          <img src="http://icengke.cn/mobile/images/qiyeguanli@3x.png">
          景点大全
        </router-link>
        <router-link to="/">
          <img src="http://icengke.cn/mobile/images/eduonline.png">
          园区美景
        </router-link>
        <router-link to="/">
          <img src="http://icengke.cn/mobile/images/suzhi@3x.png">
          游玩攻略
        </router-link>
        <router-link to="/">
          <img src="http://icengke.cn/mobile/images/gengduo@2x.png">
          集团简介
        </router-link>
      </div>
      <!-- 新闻推荐 -->
      <div class="home-news">
        <div class="title">
          <img src="./gongGao.png">
          <span>最近新闻</span>
        </div>
        <div class="inner">
          <ul class="sw-inner" :class="{'anim': animateNews}">
            <router-link tag="li" v-for="(item) in news" :key="item.id" :to="addUrl('/news',item.id)">{{item.title}}</router-link>
          </ul>
        </div>
        <router-link tag="div" to="/" class="more">更多</router-link>
      </div>
      <div style="color: red">
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/> <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/> <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
        1
        <br/>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script type="text/ecmascript-6">
import {getBanner, getHomeNews} from '@/api/api'
import {ERR_OK} from '@/api/config'
import {loadingMixin} from '@/common/js/mixin'
import FooterNav from 'footer-nav/footer-nav'

export default {
  mixins: [loadingMixin],
  components: {
    FooterNav
  },
  data () {
    return {
      banner: [],
      news: [],
      animateNews: false
    }
  },
  created () {
    this._getAllData()
  },
  methods: {
    addUrl (urlText, itemId) {
      return `${urlText}/${itemId}`
    },
    _getAllData () {
      let _this = this
      let promise1 = new Promise(function (resolve, reject) {
        getBanner().then((res) => {
          if (res.code === ERR_OK) {
            _this.banner = res.data
            resolve(res.data)
          }
        })
      })
      let promise2 = new Promise(function (resolve, reject) {
        getHomeNews().then((res) => {
          if (res.code === ERR_OK) {
            _this.news = res.data
            if (res.data.length > 1) {
              setInterval(_this._swNewsStart, 5000)
            }
            resolve(res.data)
          }
        })
      })
      let promise4 = Promise.all([promise1, promise2])
      promise4.then(() => {
        this.closeLoadingAct()
      })
    },
    _swNewsStart () {
      this.animateNews = true
      setTimeout(() => {
        this.news.push(this.news[0])
        this.news.shift()
        this.animateNews = false
      }, 500)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .home
    width: 100%
    height: 100%
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    -ms-flex-direction: column
    -webkit-box-orient: vertical
    box-orient: vertical
    -webkit-flex-direction: column
    flex-direction: column
    .header
      position: fixed
      top: 0
      width: 100%
      height: 45px
      padding: 8px .3rem
      z-index: 1000
      max-width: $max-width
      .input
        width: 100%
        height: 100%
        line-height: 30px
        background-color: hsla(0,0%,100%,.8)
        border-radius: 17px
        font-size: .28rem
        padding-left: 10px
        color: $color-background-999
        vertical-align: middle
        .mintui
          vertical-align: middle
    .inner-box
      position: relative
      -webkit-box-flex: 1
      -webkit-flex: 1
      -ms-flex: 1
      flex: 1
      margin-top: 0
      background-color: $color-background
      overflow-y: scroll
      -webkit-overflow-scrolling: touch
      .banner-swiper
        width: 100%
        position: relative
        height: 3.24rem
      .home-nav
        padding: 0.26rem 0.2rem
        display: -webkit-box
        display: -webkit-flex
        display: -ms-flexbox
        display: flex
        -ms-flex-direction: row
        -webkit-box-orient: horizontal
        box-orient: horizontal
        -webkit-flex-direction: row
        flex-direction: row
        background-color: #fff
        a
          display: block
          position: relative
          -webkit-box-flex: 1
          -webkit-flex: 1
          -ms-flex: 1
          flex: 1
          text-align: center
          font-size: 0.26rem
          img
            display: block
            width: 56%
            margin: 0 auto 0.14rem
      .home-news
        height: 0.72rem
        margin: 0.1rem 0.1rem 0
        background-color: #fff
        border-radius: 0.1rem
        display: -webkit-box
        display: -webkit-flex
        display: -ms-flexbox
        display: flex
        -ms-flex-direction: row
        -webkit-box-orient: horizontal
        box-orient: horizontal
        -webkit-flex-direction: row
        flex-direction: row
        .title
          line-height: 0.72rem
          padding: 0 0.16rem 0 0.1rem
          position: relative
          display: -webkit-box
          display: -webkit-flex
          display: -ms-flexbox
          display: flex
          -ms-flex-direction: row
          -webkit-box-orient: horizontal
          box-orient: horizontal
          -webkit-flex-direction: row
          flex-direction: row
          img
            display: block
            width: 0.38rem
            height: 0.38rem
            margin-top: 0.17rem
            opacity: 0.7
            margin-right: 0.1rem
          span
            color: $color-dialog-background
            font-size: $font-size-medium
            font-weight: 400
            display: block
          &:before
            content: ''
            position: absolute
            z-index: 1
            right: 0
            top: 0.2rem
            width: 1px
            height: 0.32rem
            background-color: #dedede
            -webkit-transform: scaleX(.5)
            transform:scaleX(.5)
        .more
          line-height: 0.72rem
          padding: 0 0.25rem 0 0.25rem
          position: relative
          color: $color-background-999
          font-size: $font-size-medium
          &:before
            content: ''
            position: absolute
            z-index: 1
            left: 0
            top: 0.2rem
            width: 1px
            height: 0.32rem
            background-color: #dedede
            -webkit-transform: scaleX(.5)
            transform:scaleX(.5)
        .inner
          margin: 0 0.2rem
          -webkit-box-flex: 1
          -webkit-flex: 1
          -ms-flex: 1
          flex: 1
          overflow: hidden
          .sw-inner
            li
              height: 0.72rem
              line-height: 0.72rem
              color: $color-background-999
              font-size: $font-size-medium
              no-wrap()
            &.anim
              transition: all 0.5s
              margin-top: -0.72rem
</style>
