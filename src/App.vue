<template>
  <div id="app" v-cloak>
    <router-view/>
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
  [v-cloak]
    opacity: 0
</style>
