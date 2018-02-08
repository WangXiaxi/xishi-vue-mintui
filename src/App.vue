<template>
  <div id="app" v-cloak :class="{paddbottom:FooterNavShow === true}">
    <div class="inner-box">
      <transition name="slide">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="slide">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
    <FooterNav v-show="FooterNavShow"></FooterNav>
  </div>
</template>

<script>
import FooterNav from 'footer-nav/footer-nav'
export default {
  name: 'App',
  components: {
    FooterNav
  },
  computed: {
    FooterNavShow () {
      return this.$store.state.FooterNavShow
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
    position: relative
    &.paddbottom
      padding-bottom:1.04rem
    .inner-box
      width: 100%
      height: 100%
      overflow: hidden
      .abx
        width: 100%
        height:100%
  .slide-enter-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    opacity: 0
  [v-cloak]
    opacity: 0
</style>
