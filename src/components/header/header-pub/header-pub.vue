<template>
  <div class="pub-header">
    <span class="extend-click header-icon header-left" @click="goBack()"></span>
    <div class="header-content">
      {{headerTitle}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['headerTitle', 'back'],
  methods: {
    goBack () {
      // 坑
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
