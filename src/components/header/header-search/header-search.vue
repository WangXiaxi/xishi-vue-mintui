<template>
  <div class="header-search">
    <div class="header-content">
      <div class="my-input">
        <i class="mintui mintui-search">
        </i>
        <input type="" name="" placeholder="搜索内容" autofocus="autofocus">
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  .header-search
    .header-content
      width: 100%
      height: 45px
      background-color: #d9d9d9
      padding: 8px .3rem
      .my-input
        width: 100%
        height: 100%
        line-height: 30px
        background-color: #fff
        border-radius: 17px
        font-size: .34rem
        padding-left: 10px
        color: $color-dialog-background
        .mintui
          color: $color-dialog-background
          float: left
        input
          width: 80%
          height: 100%
          border: none
          outline: none
          font-size: 14px
          float: left
          margin-top: 0
          vertical-align: middle
          padding: 4px 0 4px 10px
          line-height: 20px
        span
          float: left
          font-size: 14px
          line-height: 28px
          padding-top: 1px
          color: $color-theme
</style>
