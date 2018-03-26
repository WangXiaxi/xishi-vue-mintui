<template>
  <div id="app" v-cloak>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
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
  },
  watch: {
    '$route': function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    position: relative
    &.paddbottom
      padding-bottom: 1.04rem
  [v-cloak]
    opacity: 0
</style>
