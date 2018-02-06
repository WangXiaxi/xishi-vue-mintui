<template>
  <transition name="opacity">
    <div class="mint-indicator" @touchstart.stop.prevent @touchmove.stop.prevent @touchend.stop.prevent>
      <div class="mint-indicator-wrapper" style="padding: 20px;">
        <span class="mint-indicator-spin">
          <div class="mint-spinner-fading-circle circle-color-20" style="width: 32px; height: 32px;">
            <div class="mint-spinner-fading-circle-circle is-circle2"></div>
            <div class="mint-spinner-fading-circle-circle is-circle3"></div>
            <div class="mint-spinner-fading-circle-circle is-circle4"></div>
            <div class="mint-spinner-fading-circle-circle is-circle5"></div>
            <div class="mint-spinner-fading-circle-circle is-circle6"></div>
            <div class="mint-spinner-fading-circle-circle is-circle7"></div>
            <div class="mint-spinner-fading-circle-circle is-circle8"></div>
            <div class="mint-spinner-fading-circle-circle is-circle9"></div>
            <div class="mint-spinner-fading-circle-circle is-circle10"></div>
            <div class="mint-spinner-fading-circle-circle is-circle11"></div>
            <div class="mint-spinner-fading-circle-circle is-circle12"></div>
            <div class="mint-spinner-fading-circle-circle is-circle13"></div>
          </div>
        </span>
        <span class="mint-indicator-text" style="">
          加载中...
        </span>
      </div>
      <div class="mint-indicator-mask">
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  .mint-indicator
    z-index: 1001
    position: relative
  .mint-spinner-fading-circle-circle::before
    background: $color-background-999
  .opacity-enter-active,.opacity-leave-active
    transition: all 0.5s
  .opacity-enter,.opacity-leave-to
    opacity: 0
</style>
