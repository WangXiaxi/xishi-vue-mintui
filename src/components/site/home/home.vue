<template>
  <div class="home">
    <div class="header">
      <router-link class="input" tag="div" to="/">
        <i class="mintui mintui-search">
        </i>
        搜索
      </router-link>
    </div>
    <scroll class="inner-box" ref="homeBox">
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
        <!-- 门票选择 -->
        <div class="pub-floor">
          <h2>门票·选择</h2>
          <ul class="list">
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p class="t-l"><span>惠</span>东方文化园年卡门票</p>
              <div class="price-box"><span class="price"><i>￥</i>300.00</span><span class="old-price"><i>￥</i>460.00</span></div>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p class="t-l"><span>惠</span>太虚湖酒店</p>
              <div class="price-box"><span class="price"><i>￥</i>300.00</span><span class="old-price"><i>￥</i>460.00</span></div>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p class="t-l">太极坛</p>
              <div class="price-box"><span  class="price"><i>￥</i>460.00</span><span class="old-price"><i>￥</i>460.00</span></div>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p class="t-l">观音显圣</p>
              <div class="price-box"><span class="price"><i>￥</i>460.00</span><span class="old-price"><i>￥</i>460.00</span></div>
            </router-link>
          </ul>
          <div class="more-box">
            <router-link class="more" to="/">
              查看更多
            </router-link>
          </div>
        </div>
        <!-- 景点推荐 -->
        <div class="pub-floor">
          <h2>景点·推荐</h2>
          <ul class="list">
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p>杨岐山寺庙</p>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p>太虚湖酒店</p>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p>太极坛</p>
            </router-link>
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <p>观音显圣</p>
            </router-link>
          </ul>
          <div class="more-box">
            <router-link class="more" to="/">
              查看更多
            </router-link>
          </div>
        </div>
        <!-- 玩法攻略 -->
        <div class="home-strategy">
          <!-- <ul class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <router-link tag="li" to="/">
              <img src="https://p1.meituan.net/400.0/poi/b6b19ba00b2a4e37ee054496f495e567485586.png">
              <h2>杨岐山寺庙</h2>
              <p>js是达到无缝滚动的效果 marquee的效果却不同，必须要前一次滚动完成之后，才会接着下一次！ 两次之间留下一段空白！ 没有什么费事不费事的问题，只是看你自己需要什么效果而已！</p>
            </router-link>
          </ul> -->
        </div>
      </div>
    </scroll>
    <FooterNav></FooterNav>
  </div>
</template>

<script type="text/ecmascript-6">
import {getBanner, getHomeNews} from '@/api/api'
import {ERR_OK} from '@/api/config'
import {loadingMixin} from '@/common/js/mixin'
import FooterNav from 'footer-nav/footer-nav'
import Scroll from 'base/scroll/scroll'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  mixins: [loadingMixin],
  components: {
    FooterNav,
    swiper,
    swiperSlide,
    Scroll
  },
  data () {
    return {
      banner: [],
      news: [],
      animateNews: false,
      swiperOption: {
      // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
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
      }
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
        setTimeout(() => {
          this.$refs.homeBox.refresh()
        }, 20)
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
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
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
    position: relative
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
        background-color: hsla(0, 0%, 100%, .8)
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
        .banner-bg
          width: 100%
          height: 3.24rem
          background: 50% 50% no-repeat
          background-size: 100%
          display: block
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
          line-height: 0
          padding: 0.36rem 0.16rem 0.36rem 0.1rem
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
            p
              font-size: $font-size-medium-s
              font-weight: 400
              line-height: 1.6
              margin-top: 0.04rem
              text-align: center
              no-wrap()
              vertical-align: middle
              span
                display: inline-block
                background: $color-hui
                color: #fff
                line-height: 0
                font-size: $font-size-small
                padding: 0.16rem 0.04rem
                border-radius: 2px
                vertical-align: middle
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
</style>
