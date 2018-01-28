<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
  },
  mounted () {
    setTimeout(() => {
      this.loading.close()
    }, 20)
  }
}
</script>

<style>

</style>
