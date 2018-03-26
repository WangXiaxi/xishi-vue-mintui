<template>
  <div class="titket-detail child-view">
    <div class="header-box">
      <div class="back"></div>
    </div>
    <div class="swiper-list">
      <swiper class="my-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="http://p1.meituan.net/hotel/e25121a2fb8eb0bc0504c14643c615c2746530.png" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: { // swiper 配置参数
        notNextTick: true,
        loop: true,
        speed: 600,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 3000,
        autoHeight: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
  },
  created () {
  },
  deactivated () {
    if (this.$refs.mySwiper) {
      this.$refs.mySwiper.swiper.stopAutoplay()
    }
  },
  activated () {
    if (this.$refs.mySwiper) {
      this.$refs.mySwiper.swiper.startAutoplay()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  
  .titket-detail
    .swiper-list
      width: 100%
      .my-swiper
        width: 100%
        .swiper-slide
          img
            width: 100%
</style>
