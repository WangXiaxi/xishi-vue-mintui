<template>
  <Scroll class="mine-box" ref="mineBox">
    <div>
      <div class="mine-header">
        <div class="top">
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
        </div>
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
          <span class="tit">我的订单</span>
          <span class="more"><span>查看全部订单</span><i></i></span>
        </div>
      </div>
      <div class="mine-more">
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
    display: flex
    box-orient: vertical
    flex-direction: column
    position: relative
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
            height: 0.6rem
            line-height: 0
            padding: 0.3rem 0 0.3rem 0.5rem
            &.fav
              background-image: url('./fav.png')
            &.point
              background-image: url('./point.png')
</style>
