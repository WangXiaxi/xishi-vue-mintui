<template>
  <p class="page-infinite-loading">
    <span style="font-size: 0" v-if="ifShowLoad">
      <div class="mint-spinner-fading-circle circle-color-117" style="width: 18px; height: 18px;">
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
    <span>{{title}}</span>
  </p>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    },
    ifShowLoad: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  .page-infinite-loading
    text-align: center
    height: 40px
    line-height: 40px
    background: $color-background
    div
      display: inline-block
      vertical-align: middle
      margin-right: 5px
    span
      vertical-align: middle
      font-size: 12px
      color: $color-background-999
  .mint-spinner-fading-circle-circle::before
    background: $color-background-999
</style>
