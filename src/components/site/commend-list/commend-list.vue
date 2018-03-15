<template>
  <div class="news-list child-view">
    <HeaderPub headerTitle="景点·推荐"></HeaderPub>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from 'header/header-pub/header-pub'
export default {
  components: {
    HeaderPub
  },
  computed: {
    TopHeight () {
      return `top: ${document.documentElement.clientHeight / 2}px`
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
</style>
