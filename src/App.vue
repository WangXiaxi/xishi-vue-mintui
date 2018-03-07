<template>
  <div id="app" v-cloak>
    <div class="inner-box">
      <transition name="slide">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
      <transition name="slide">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
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
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    position: relative
    &.paddbottom
      padding-bottom: 1.04rem
  .slide-enter-active
    transition: all 0.5s ease
  .slide-enter,.slide-leave-to
    opacity: 0
  [v-cloak]
    opacity: 0
</style>
