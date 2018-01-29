<template>
  <div class="home">
    <div class="header">
      <router-link class="input" tag="div" to="/">
        <i class="mintui mintui-search">
        </i>
        搜索
      </router-link>
    </div>
    <div class="banner-swiper">
      <mt-swipe :auto="5000" :speed="300" :prevent="false" :stopPropagation="true" v-show="banner.length>0">
        <mt-swipe-item v-for="(item, index) in banner" :key="index">
          <router-link tag="div" to="item.url">
           <img :src="item.image" style="width: 100%; height: auto">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getBanner} from '@/api/api'
import {ERR_OK} from '@/api/config'
import {loadingMixin} from '@/common/js/mixin'

export default {
  mixins: [loadingMixin],
  components: {
  },
  data () {
    return {
      banner: []
    }
  },
  created () {
    this._getAllData()
  },
  methods: {
    _getAllData () {
      let _this = this
      let promise1 = new Promise(function (resolve, reject) {
        getBanner().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data)
            _this.banner = res.data
            resolve(res.data)
          }
        })
      })
      let promise4 = Promise.all([promise1])
      promise4.then(() => {
        this.closeLoadingAct()
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  .home
    width: 100%
    height: 100%
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    -ms-flex-direction: column
    -webkit-box-orient: vertical
    box-orient: vertical
    -webkit-flex-direction: column
    flex-direction: column
    .header
      position: fixed
      top: 0
      width: 100%
      height: 45px
      padding: 8px .3rem
      z-index: 1000
      .input
        width: 100%
        height: 100%
        line-height: 30px
        background-color: hsla(0,0%,100%,.8)
        border-radius: 17px
        font-size: .28rem
        padding-left: 10px
        color: $color-dialog-background
        vertical-align: middle
        .mintui
          vertical-align: middle
    .banner-swiper
      width: 100%
      position: relative
      height: 3.24rem
</style>
