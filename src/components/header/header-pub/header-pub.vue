<template>
  <div class="pub-header-box">
    <div class="pub-header">
      <a class="page-back" @click="goBack"><i class="mintui mintui-back"></i></a>
      <div class="header-content">
        {{headerTitle}}
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    'headerTitle': {
      type: String,
      default: '不存在页面'
    },
    'back': {
      type: String,
      default: 'no'
    }
  },
  methods: {
    goBack () {
      if (this.back === 'no') {
        this.$router.go(-1)
      } else {
        this.$router.push(this.back)
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .pub-header-box
    height: 0.86rem
    .pub-header
      height: 0.86rem
      background: #fff
      position: fixed
      width: 100%
      top: 0
      z-index: 1000;
      &:before
        line-scale()
        bottom: 0
        top: auto
      .page-back
        display: block
        top: 0
        left: 0
        position: absolute
        width: 0.86rem
        height: 0.86rem
        text-align: center
        display: flex
        justify-content: center
        align-items: center
      .header-content
        text-align: center
        line-height: 0.86rem
        font-size: $font-size-medium-x1
        letter-spacing: 1px
        font-weight: 400
        color: $color-highlight-background
</style>
