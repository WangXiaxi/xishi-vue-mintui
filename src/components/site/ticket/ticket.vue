<template>
  <div class="ticket-box">
    <LoadFull v-if="currentShow"></LoadFull>
    <HeaderPub headerTitle="门票"></HeaderPub>
    <div class="class-banner">
      <swiper :options="swiperOption" v-if="ticketClass.length>0" ref="mySwiper">
        <swiper-slide class="cl-box" :class="{act:curClassId === 0}">
          <a @click="chooseTicket(0)">全部</a>
        </swiper-slide>
        <swiper-slide class="cl-box" v-for="(item, index) in ticketClass" :class="{act:curClassId === item.id}" @click="chooseTicket(item.id)" :key="index">
          <a @click="chooseTicket(item.id)">{{item.name}}</a>
        </swiper-slide>
      </swiper>
    </div>
    <Scroll class="ticket" :class="{'opacity':currentShow}" :data="ticket" :pullup="pullup" @scrollToEnd="loadMore" ref="ticketBox">
      <div>
        <ul class="ticket-list">
          <li v-for="(item, index) in ticket" :key="index">
            <div class="img-box">
              <img v-lazy="item.img">
            </div>
            <div class="content-box">
              <h2 class="tit"><span class="tips" v-if="Number(item.sell_price)<Number(item.market_price)">惠</span><span>{{item.name}}</span></h2>
              <p class="tips-ts"><a  v-for="(item, index) in item.conditions" :key="index">{{item}}</a></p>
              <div class="price-box">
                <span class="price"><i>￥</i>{{item.sell_price}}</span>
                <span class="old-price" v-if="Number(item.sell_price)<Number(item.market_price)"><i>￥</i>{{item.market_price}}</span>
              </div>
              <div class="shopping"></div>
            </div>
          </li>
        </ul>
        <LoadScroll v-show="ifShowLoadScroll" :ifShowLoad="ifShowLoad" :title="loadScrollTitle"></LoadScroll>
      </div>
    </Scroll>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from 'header/header-pub/header-pub'
import Scroll from 'base/scroll/scroll'
import LoadFull from 'base/load-full/load-full'
import LoadScroll from 'base/load-scroll/load-scroll'
import {getTicket, getTicketClass} from '@/api/api'
import {ERR_OK} from '@/api/config'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {
    HeaderPub,
    Scroll,
    LoadFull,
    LoadScroll,
    swiper,
    swiperSlide
  },
  data () {
    return {
      currentShow: true,
      ticket: [],
      ticketClass: [],
      pullup: true,
      ifShowLoadScroll: true,
      ifShowLoad: true, // 判断是否需要Loadscroll圆圈图标
      loadScrollTitle: '数据加载中...',
      page: 2, // 底部上拉加载页数
      hasMore: true, // 是否还需要上拉加载
      swiperOption: { // swiper 配置参数
        slidesPerView: 'auto',
        freeMode: true
      },
      curClassId: 0
    }
  },
  created () {
    this._getAllData()
  },
  methods: {
    _getAllData () {
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getTicket(1, this.curClassId).then((res) => {
          if (res.code === ERR_OK) {
            _this.ticket = res.data
            if (res.data.length < 10) {
              _this.loadScrollTitle = '没有更多数据了'
              _this.ifShowLoad = false
              _this.hasMore = false
            }
            resolve(res.data)
          } else {
            resolve(res)
          }
        })
      })
      let promise2 = new Promise((resolve, reject) => {
        getTicketClass().then((res) => {
          if (res.code === ERR_OK) {
            _this.ticketClass = res.data
            resolve(res.data)
          } else {
            resolve(res)
          }
        })
      })
      let promiseAll = Promise.all([promise1, promise2])
      promiseAll.then(() => {
        setTimeout(() => {
          this.$refs.ticketBox.refresh()
          this.currentShow = false
        }, 200)
      })
    },
    chooseTicket (id) {
      if (this.curClassId === id) return
      this.curClassId = id
      this.loading.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.ticket = []
      this.$refs.ticketBox.scrollTo(0, 0)
      this.ifShowLoad = true // 判断是否需要Loadscroll圆圈图标
      this.loadScrollTitle = '数据加载中...'
      this.page = 2
      this.hasMore = true
      let _this = this
      getTicket(1, this.curClassId).then((res) => {
        if (res.code === ERR_OK) {
          _this.ticket = res.data
          if (res.data.length < 10) {
            _this.loadScrollTitle = '没有更多数据了'
            _this.ifShowLoad = false
            _this.hasMore = false
          }
        }
        setTimeout(() => {
          this.$refs.ticketBox.refresh()
          _this.loading.close()
        }, 200)
      })
    },
    loadMore () { // 数据上拉加载
      if (!this.hasMore) return
      this.hasMore = false
      getTicket(this.page, this.curClassId).then((res) => {
        if (res.code === ERR_OK) {
          setTimeout(() => {
            if (res.data.length < 10) {
              this.loadScrollTitle = '没有更多数据了'
              this.ifShowLoad = false
            } else {
              this.hasMore = true
            }
            this.ticket = this.ticket.concat(res.data)
            this.page++
          }, 500)
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .ticket-box
    width: 100%
    height: 100%
    display: flex
    box-orient: vertical
    flex-direction: column
    position: relative
    .class-banner
      width: 100%
      height: 0.8rem
      line-height: 0.8rem
      background: #fff
      position: relative
      &:before
        line-scale()
        bottom: 0
        top: auto
      .cl-box
        width: auto
        a
          display: block
          padding: 0 0.4rem
          font-weight: 400
          font-size: $font-size-medium
          color: $color-background-999
        &.act
          a
            color: $color-highlight-background
          &:before
            line-scale()
            height: 2px
            background: red
            bottom: 0
            top: auto
    .ticket
      flex: 1
      overflow: hidden
      transition: opacity 0.3s
      &.opacity
        opacity: 0
      .ticket-list
        background: #fff
        padding: 0 0.2rem
        &>li
          position: relative
          display: flex
          box-orient: horizontal
          flex-direction: row
          padding: 0.2rem 0
          &:before
            line-scale()
            bottom: 0
            top: auto
            height: 0
            background: #fff
            border-bottom: 1px dashed #dedede
          .img-box
            width: 2.4rem
            overflow: hidden
            margin-right: 0.2rem
            display: flex
            align-items: center
            img
              width: 100%
              height: 1.5rem
          .content-box
            flex: 1
            padding-bottom: 0.4rem
            position: relative
            .tit
              line-height: 1.42
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 2
              -webkit-box-orient: vertical
              span
                vertical-align: middle
                color: $color-dialog-background
                font-weight: 400
                font-size: $font-size-medium-s
                &.tips
                  display: inline-block
                  background: $color-hui
                  color: #fff
                  line-height: 0
                  font-size: $font-size-small-s
                  padding: 0.14rem 0.036rem
                  border-radius: 2px
                  margin-right: 0.06rem
            .tips-ts
              margin-top: 0.2rem
              a
                display: inline-block
                border: 0.5px solid rgb(62, 166, 249)
                color: rgb(62, 166, 249)
                line-height: 1.4
                padding: 0 0.04rem
                margin-right: 0.1rem
                margin-bottom: 0.1rem
            .price-box
              position: absolute
              bottom: 0.02rem
              right: 0.6rem
              left: 0
              no-wrap()
              .price
                color: $color-price
                font-size: $font-size-medium-x
                i
                  font-size: $font-size-small
              .old-price
                margin-top: 0.04rem
                text-decoration:line-through
            .shopping
              width: 0.4rem
              height: 0.4rem
              position: absolute
              right: 0.2rem
              bottom: 0
              background: red url('./shopping.png') 50% 50% no-repeat
              background-size: 70%
              border-radius: 50%
</style>
