<template>
  <div class="footer-nav-box">
    <ul class="footer-nav">
      <router-link tag="li" to="/home">
        <i class="icon-nav icon-nav-1"></i>
        首页
      </router-link>
      <router-link tag="li" to="/ticket">
        <i class="icon-nav icon-nav-2"></i>
        门票
      </router-link>
      <!-- <router-link tag="li" to="/cart">
        <i class="icon-nav icon-nav-3"></i>
        购物车
      </router-link> -->
      <router-link tag="li" to="/mine">
        <i class="icon-nav icon-nav-4"></i>
        我的
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .footer-nav-box
    height: 1.04rem
    position: relative
    z-index: 1000
    .footer-nav
      position: fixed
      width: 100%
      bottom: 0
      background: #fff
      z-index: 1000
      max-width: $max-width
      display: flex
      box-orient: horizontal
      flex-direction: row
      li
        position: relative
        -webkit-box-flex: 1
        -webkit-flex: 1
        -ms-flex: 1
        flex: 1
        color: $color-dialog-background
        text-align: center
        font-size: $font-size-small
        padding: 0.1rem
        height: 1.04rem
        .icon-nav
          display: block
          width: 100%
          height: 0.6rem
          background: 50% 0 no-repeat
          background-size: auto 80%
          &.icon-nav-1
            background-image: url('./images/nav-1.png')
          &.icon-nav-2
            background-image: url('./images/nav-2.png')
          &.icon-nav-3
            background-image: url('./images/nav-3.png')
          &.icon-nav-4
            background-image: url('./images/nav-4.png')
        &.router-link-active
          border-radius: 0.14rem
          color: $color-highlight-background
          background: $color-theme-d
          .icon-nav
            opacity: 0.6
            &.icon-nav-1
              background-image: url('./images/nav-1-act.png')
            &.icon-nav-2
              background-image: url('./images/nav-2-act.png')
            &.icon-nav-3
              background-image: url('./images/nav-3-act.png')
            &.icon-nav-4
              background-image: url('./images/nav-4-act.png')
</style>
