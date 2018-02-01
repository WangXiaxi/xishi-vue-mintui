<template>
  <div id="app" v-cloak>
    <transition name="slide">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    opacity: 0
  [v-cloak]
    opacity: 0
</style>
