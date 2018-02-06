<template>
  <div class="home">
    <LoadFull v-if="currentShow"></LoadFull>
    <div class="header">
      <router-link class="input" tag="div" to="/">
        <i class="mintui mintui-search">
        </i>
        搜索
      </router-link>
    </div>
    <scroll class="inner-box" :class="{'opacity':currentShow}" :data="strategyList" :pullup="pullup" @scrollToEnd="loadMore" ref="homeBox">
      <div>
        <!-- 轮播展示 -->
        <div class="banner-swiper">
          <swiper v-if="banner.length>0" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in banner" :key="index">
              <a class="banner-bg" :href="item.url" :style="bannerBg(item)">
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
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
        <div class="home-news" v-if="news.length>0">
          <div class="title">
            <img src="./gongGao.png">
            <span>最近新闻</span>
          </div>
          <div class="inner">
            <ul class="sw-inner" :class="{'anim': animateNews}">
              <router-link tag="li" v-for="(item, index) in news" :key="index" :to="addUrl('/news',item.id)">{{item.title}}</router-link>
            </ul>
          </div>
          <router-link tag="div" to="/" class="more">更多</router-link>
        </div>
        <!-- 门票选择 -->
        <div class="pub-floor" v-if="ticket.length>0">
          <h2>门票·选择</h2>
          <ul class="list">
            <transition-group name="opacity">
              <router-link tag="li" to="/" v-for="(item, index) in ticket" :key="index">
                <img v-lazy="item.img">
                <p class="t-l">
                  <span class="tips" v-if="Number(item.sell_price)<Number(item.market_price)">惠</span><span>{{item.name}}</span>
                </p>
                <div class="price-box"><span class="price"><i>￥</i>{{item.sell_price}}</span><span class="old-price" v-if="Number(item.sell_price)<Number(item.market_price)"><i>￥</i>{{item.market_price}}</span></div>
              </router-link>
            </transition-group>
          </ul>
          <div class="more-box">
            <router-link class="more" to="/ticket">
              查看更多
            </router-link>
          </div>
        </div>
        <!-- 景点推荐 -->
        <div class="pub-floor" v-if="scenicArea.length>0">
          <h2>景点·推荐</h2>
          <ul class="list">
            <transition-group name="opacity">
              <router-link tag="li" to="/" v-for="(item, index) in scenicArea" :key="index">
                <img v-lazy="item.img">
                <p>{{item.name}}</p>
              </router-link>
            </transition-group>
          </ul>
          <div class="more-box">
            <router-link class="more" to="/">
              查看更多
            </router-link>
          </div>
        </div>
        <!-- 玩法攻略 -->
        <div class="home-strategy" v-if="strategyList.length>0">
          <h2 class="big-tit">游玩·攻略</h2>
          <ul class="list">
            <transition-group name="opacity">
              <router-link tag="li" to="/" v-for="(item, index) in strategyList" :key="index">
                <div class="img-box">
                  <img v-lazy="item.img">
                </div>
                <div class="text-box">
                  <h2>{{item.name}}</h2>
                  <p class="des">{{item.des}}</p>
                  <span class="time">{{item.time}}</span>
                </div>
              </router-link>
            </transition-group>
          </ul>
          <LoadScroll v-show="ifShowLoadScroll" :ifShowLoad="ifShowLoad" :title="loadScrollTitle"></LoadScroll>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import {getBanner, getHomeNews, getHomeTicket, getHomeScenicArea, getHomeStrategy} from '@/api/api'
import {ERR_OK} from '@/api/config'
import Scroll from 'base/scroll/scroll'
import LoadScroll from 'base/load-scroll/load-scroll'
import LoadFull from 'base/load-full/load-full'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide,
    Scroll,
    LoadScroll,
    LoadFull
  },
  data () {
    return {
      currentShow: true,
      banner: [],
      news: [],
      ticket: [],
      scenicArea: [],
      strategyList: [],
      animateNews: false, // 新闻滚动
      swiperOption: { // swiper 配置参数
        notNextTick: true,
        loop: true,
        speed: 600,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 3000,
        autoHeight: true,
        autoplayDisableOnInteraction: false
      },
      pullup: true,
      ifShowLoadScroll: true,
      ifShowLoad: true, // 判断是否需要Loadscroll圆圈图标
      loadScrollTitle: '数据加载中...',
      page: 2, // 底部上拉加载页数
      hasMore: true // 是否还需要上拉加载
    }
  },
  computed: {
  },
  created () {
    this._getAllData()
  },
  methods: {
    addUrl (urlText, itemId) {
      return `${urlText}/${itemId}`
    },
    bannerBg (item) {
      return `background-image: url('${item.image}')`
    },
    _getAllData () { // 所有数据获取
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getBanner().then((res) => {
          if (res.code === ERR_OK) {
            _this.banner = res.data
            resolve(res.data)
          }
        })
      })
      let promise2 = new Promise((resolve, reject) => {
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
      let promise3 = new Promise((resolve, reject) => {
        getHomeTicket().then((res) => {
          if (res.code === ERR_OK) {
            _this.ticket = res.data
            resolve(res.data)
          }
        })
      })
      let promise4 = new Promise((resolve, reject) => {
        getHomeScenicArea().then((res) => {
          if (res.code === ERR_OK) {
            _this.scenicArea = res.data
            resolve(res.data)
          }
        })
      })
      let promise5 = new Promise((resolve, reject) => {
        getHomeStrategy(1).then((res) => {
          if (res.code === ERR_OK) {
            _this.strategyList = res.data
            if (res.data.length < 5) {
              this.loadScrollTitle = '没有更多数据了'
              this.ifShowLoad = false
              this.hasMore = false
            }
            resolve(res.data)
          }
        })
      })
      let promiseAll = Promise.all([promise1, promise2, promise3, promise4, promise5])
      promiseAll.then(() => {
        setTimeout(() => {
          this.$refs.homeBox.refresh()
          this.currentShow = false
        }, 200)
      })
    },
    _swNewsStart () {
      this.animateNews = true
      setTimeout(() => {
        this.news.push(this.news[0])
        this.news.shift()
        this.animateNews = false
      }, 500)
    },
    loadMore () { // 数据上拉加载
      if (!this.hasMore) return
      this.hasMore = false
      getHomeStrategy(this.page).then((res) => {
        if (res.code === ERR_OK) {
          setTimeout(() => {
            if (res.data.length < 10) {
              this.loadScrollTitle = '没有更多数据了'
              this.ifShowLoad = false
            } else {
              this.hasMore = true
            }
            this.strategyList = this.strategyList.concat(res.data)
            this.page++
          }, 500)
        }
      })
    }
  },
  deactivated () {
    if (this.$refs.mySwiper) {
      this.$refs.mySwiper.swiper.stopAutoplay()
    }
  },
  activated () {
    if (this.$refs.mySwiper) {
      this.$refs.mySwiper.swiper.startAutoplay()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .opacity-enter-active,.opacity-leave-active
    transition: all 0.3s
  .opacity-enter,.opacity-leave-to
    opacity: 0
  .home
    width: 100%
    height: 100%
    display: flex
    box-orient: vertical
    flex-direction: column
    position: relative
    .header
      position: fixed
      top: 0
      width: 100%
      height: 0.9rem
      padding: 0.12rem .3rem
      z-index: 1000
      max-width: $max-width
      .input
        width: 100%
        height: 100%
        line-height: 0.66rem
        background-color: hsla(0, 0%, 100%, .8)
        border-radius: 0.32rem
        font-size: .28rem
        padding-left: 0.2rem
        color: $color-background-999
        vertical-align: middle
        .mintui
          vertical-align: middle
          font-size: 0.32rem
    .inner-box
      position: relative
      flex: 1
      margin-top: 0
      background-color: $color-background
      overflow-y: hidden
      opacity: 1
      transition: opacity 0.3s
      &.opacity
        opacity: 0
      .banner-swiper
        width: 100%
        position: relative
        .banner-bg
          width: 100%
          height: 3.24rem
          background: 50% 50% no-repeat
          background-size: 100%
          display: block
      .home-nav
        padding: 0.26rem 0.2rem
        display: flex
        box-orient: horizontal
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
          font-size: $font-size-medium
          color: $color-highlight-background
          img
            display: block
            width: 56%
            margin: 0 auto 0.14rem
      .home-news
        height: 0.72rem
        margin: 0.1rem 0.1rem 0
        background-color: #fff
        border-radius: 0.1rem
        display: flex
        box-orient: horizontal
        flex-direction: row
        .title
          line-height: 0
          padding: 0.36rem 0.16rem 0.36rem 0.1rem
          position: relative
          display: flex
          box-orient: horizontal
          flex-direction: row
          img
            display: block
            width: 0.36rem
            height: 0.36rem
            margin-top: -0.18rem
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
          line-height: 0
          padding: 0.36rem 0.25rem
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
              line-height: 0
              padding: 0.36rem 0
              color: $color-background-999
              font-size: $font-size-medium
              no-wrap()
            &.anim
              transition: all 0.5s
              margin-top: -0.72rem
      .pub-floor
        margin-top: 0.1rem
        background-color: #fff
        position: relative
        h2
          color: $color-highlight-background
          font-size: $font-size-medium-x1
          font-weight: 400
          text-align: center
          padding: 0.34rem 0 0.24rem
        .more-box
          text-align: center
          font-size: 0
          position: relative
          &:after
              line-scale()
          .more
            font-size: $font-size-small
            padding: 0.3rem 0.2rem 0.3rem 0.4rem
            display: inline-block
            position: relative
            padding-right: 0.45rem
            &:before
              border: 1px solid #c8c8cd
              border-bottom-width: 0
              border-left-width: 0
              content: " "
              top: 50%
              right: 0.3rem
              position: absolute
              width: 0.1rem
              height: 0.1rem
              -webkit-transform: translateY(-50%) rotate(45deg)
              transform: translateY(-50%) rotate(45deg)
        .list
          overflow: hidden
          position: relative
          li
            width: 50%
            float: left
            padding: 0.1rem 0.2rem
            img
              width: 100%
              height: 1.98rem
              background-color: $color-background
            p
              font-size: $font-size-medium-s
              font-weight: 400
              line-height: 1.6
              margin-top: 0.04rem
              text-align: center
              no-wrap()
              vertical-align: middle
              span
                vertical-align: middle
                &.tips
                  display: inline-block
                  background: $color-hui
                  color: #fff
                  line-height: 0
                  font-size: $font-size-small-s
                  padding: 0.14rem 0.036rem
                  border-radius: 2px
                  margin-right: 0.06rem
              &.t-l
                text-align: left
            .price-box
              margin-top: 0.06rem
              .price
                color: $color-price
                font-size: $font-size-medium
                i
                  font-size: $font-size-small
              .old-price
                float: right
                margin-top: 0.04rem
                text-decoration:line-through
      .home-strategy
        width: 100%
        position: relative
        overflow: hidden
        margin-top: 0.1rem
        background: #fff
        .big-tit
          color: $color-highlight-background
          font-size: $font-size-medium-x1
          font-weight: 400
          text-align: center
          padding: 0.34rem 0 0.24rem
        .list
          position: relative
          margin-top: 0.1rem
          &:after
              line-scale()
              width: calc(100% - 0.4rem)
              left: 0.2rem
              bottom: 0
              top: auto
          li
            height: auto
            overflow: hidden
            display: flex
            box-orient: horizontal
            flex-direction: row
            padding: 0.3rem 0.2rem
            position: relative
            &:after
              line-scale()
              width: calc(100% - 0.4rem)
              left: 0.2rem
            .img-box
              width: 2.4rem
              font-size: 0
              display: flex
              align-items: center
              img
                width: 100%
                height: 1.5rem
                background-color: $color-background
            .text-box
              position: relative
              flex: 1
              margin-left: 0.2rem
              padding-bottom: 0.36rem
              h2
                font-weight: 400
                font-size: $font-size-medium-s
                line-height: 1.42
              .des
                line-height: 1.42
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 3
                -webkit-box-orient: vertical
              .time
                display: block
                text-align: right
                position: absolute
                bottom: 0
                left: 0
                right: 0
                height: 0.36rem
                line-height: 0.36rem
</style>
