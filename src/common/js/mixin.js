export const loadingMixin = {
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
  },
  methods: {
    closeLoadingAct () {
      setTimeout(() => {
        this.loading.close()
      }, 20)
    }
  }
}
