<template>
  <Scroll class="mine-box" ref="mineBox">
    <div>
      <div class="mine-header">
        <router-link tag="div" to="/personal-pro" class="top">
          <div class="header-img">
            <img src="./header.png" onerror="./header.png">
          </div>
          <div class="header-inner">
            <div class="header-inner-box">
              <h2 class="name"><img src="./sex-men.png"><span>15058559592用户名</span></h2>
              <p class="home-location">浙江省 杭州市 萧山区东方文化园</p>
            </div>
          </div>
          <div class="more">
          </div>
        </router-link>
        <div class="bot">
          <div class="item">
            <span class="ico-bg point">
              积分 5000
            </span>
          </div>
          <div class="split"></div>
          <div class="item">
            <span class="ico-bg fav">
              我的收藏
            </span>
          </div>
        </div>
      </div>
      <div class="mine-order">
        <div class="tit-box">
          <span class="tit">门票订单</span>
          <span class="more"><span>查看全部</span></span>
        </div>
        <div class="order-nav">
          <ul>
            <li>
              <i class="o-n-1"></i>
              待付款
            </li>
            <li>
              <i class="o-n-2"></i>
              待出票
            </li>
            <li>
              <i class="o-n-3"></i>
              待使用
            </li>
            <li>
              <i class="o-n-4"></i>
              待评价
            </li>
          </ul>
        </div>
      </div>
      <div class="mine-more">
        <ul>
          <li>
            <span class="i-fo">我的足迹</span>
          </li>
          <li>
            <span class="i-location">地址管理</span>
          </li>
          <router-link tag="li" to="/personal-pro">
            <span class="i-preson">资料修改</span>
          </router-link>
          <li>
            <span class="i-passw">修改密码</span>
          </li>
          <li>
            <span class="i-reg">意见反馈</span>
          </li>
        </ul>
      </div>
      <div class="mine-out">
        退出登录
      </div>
      <div class="mine-zc">
        <p>浙江依杭网络科技有限公司</p>
        <p>提供技术支持</p>
      </div>
    </div>
  </Scroll>
</template>
<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
export default {
  components: {
    Scroll
  },
  activated () {
    setTimeout(() => {
      this.$refs.mineBox.refresh()
    }, 20)
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .mine-box
    width: 100%
    height: 100%
    position: relative
    overflow: hidden
    .mine-header
      height: 3.8rem
      background: #FB5350 #F95352
      background: linear-gradient(to bottom, #ED5564, #ED5564)
      position: relative
      .top
        display: flex
        box-orient: horizontal
        flex-direction: row
        height: 2.8rem
        padding: 0.4678rem
        .header-img
          width: 1.64rem
          display: flex
          align-items: center
          margin-right: 0.2rem
          img
            width: 1.64rem
            height: 1.64rem
        .header-inner
          flex: 1
          // background: red
          display: flex
          align-items: center
          overflow: hidden
          .header-inner-box
            width: 100%
            .name
              width: 100%
              color: #fff
              padding: 0.2rem 0 0.2rem 0.2rem
              no-wrap()
              span
                font-size: $font-size-large
                vertical-align: middle
              img
                width: 0.34rem
                vertical-align: middle
                margin-right: 0.1rem
            .home-location
              color: #fff
              font-size: $font-size-medium
              padding: 0 0 0.2rem 0.2rem
              no-wrap()
        .more
          width: 0.5rem
          position: relative
          &:before
            border: 1px solid #fff
            border-bottom-width: 0
            border-left-width: 0
            content: " "
            top: 50%
            right: 0rem
            position: absolute
            width: 0.3rem
            height: 0.3rem
            -webkit-transform: translateY(-50%) rotate(45deg)
            transform: translateY(-50%) rotate(45deg)
      .bot
        width: 100%
        position: absolute
        bottom: 0
        height: 1rem
        background: rgba(0, 0, 0, 0.08)
        display: flex
        flex-direction: row
        box-orient: horizontal
        overflow: hidden
        .split
          width: 1px
          height: 60%
          background: rgba(255, 255, 255, 0.4)
          position: relative
          top: 20%
        .item
          flex: 1
          overflow: hidden
          color: #fff
          text-align: center
          display: flex
          align-items: center
          justify-content: center
          box-pack: center
          box-align: center
          .ico-bg
            display: inline-block
            font-size: $font-size-medium
            background: 0 50% no-repeat
            background-size: 0.4rem
            height: 0.8rem
            line-height: 0
            padding: 0.4rem 0 0.4rem 0.5rem
            &.fav
              background-image: url('./fav.png')
            &.point
              background-image: url('./point.png')
    .mine-order
      background: #fff
      .tit-box
        height: 1rem
        padding-left: 0.2rem
        position: relative
        &:before
          line-scale()
          top: auto
          bottom: 0
          right: 0
          left: auto
          width: calc(100% - 0.2rem)
        .tit
          line-height: 1rem
          font-size: $font-size-medium-x1
        .more
          float: right
          line-height: 1rem
          color: $color-background-999
          padding-right: 0.4rem
          margin-right: 0.2rem
          position: relative
          span
            font-size: $font-size-medium
            position: relative
          &:before
            border: 1px solid #dedede
            border-bottom-width: 0
            border-left-width: 0
            content: " "
            top: 49%
            right: 0.2rem
            position: absolute
            width: 0.16rem
            height: 0.16rem
            -webkit-transform: translateY(-50%) rotate(45deg)
            transform: translateY(-50%) rotate(45deg)
      .order-nav
        ul
          display: flex
          box-orient: horizontal
          flex-direction: row
          position: relative
          padding-top: 0.2rem
          li
            flex: 1
            text-align: center
            font-size: $font-size-medium-s
            padding-bottom: 0.3rem
            i
              display: block
              height: 0.6rem
              width: 0.6rem
              margin: 0 auto 0.1rem
              background-repeat: no-repeat
              background-size: auto 0.5rem
              background-image: url(./order.png)
              &.o-n-1
                background-position: -2.97rem 0
              &.o-n-2
                background-position: -1.18rem 0
              &.o-n-3
                background-position: -0.58rem 0
              &.o-n-4
                background-position: -1.76rem 0
    .mine-more
      background: #fff
      margin-top: 0.2rem
      ul
        padding-left: 0.2rem
        li
          line-height: 1rem
          position: relative
          &:after
            border: 1px solid #dedede
            border-bottom-width: 0
            border-left-width: 0
            content: " "
            top: 49%
            right: 0.4rem
            position: absolute
            width: 0.16rem
            height: 0.16rem
            -webkit-transform: translateY(-50%) rotate(45deg)
            transform: translateY(-50%) rotate(45deg)
          &:before
            line-scale()
            top: auto
            bottom: 0
            right: 0
            left: auto
            width: calc(100%)
          &:last-child
            &:before
              height: 0
          span
            font-size: $font-size-medium-x1
            display: block
            background: 0 50% no-repeat
            background-size: auto 40%
            padding-left: 0.5rem
            &.i-fo
              background-image: url('./i-fo.png')
            &.i-preson
              background-image: url('./i-preson.png')
            &.i-reg
              background-image: url('./i-reg.png')
            &.i-passw
              background-image: url('./i-passw.png')
            &.i-location
              background-image: url('./i-location.png')
    .mine-out
      line-height: 1rem
      text-align: center
      background: #fff
      margin-top: 0.2rem
      font-size: $font-size-medium-x1
    .mine-zc
      text-align: center
      padding-bottom: 0.6rem
      color: $color-background-999
      font-size: $font-size-medium
      line-height: 1.6
      margin-top: 0.6rem
</style>
