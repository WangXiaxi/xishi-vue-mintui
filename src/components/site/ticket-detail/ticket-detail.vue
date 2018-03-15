<template>
  <div class="titket-detail child-view">
    <div class="header-box">
      <div class="back"></div>
    </div>
    <div class="swiper-list">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="http://gw.alicdn.com/imgextra/i3/45216016/TB2Ul_Vtl0kpuFjSsppXXcGTXXa_!!45216016.png_760x760.jpg_.webp" />
        </swiper-slide>
        <swiper-slide>
          <img src="http://gw.alicdn.com/imgextra/i4/45216016/TB2vWu1tmBjpuFjSsplXXa5MVXa_!!45216016.jpg_760x760q50s150.jpg_.webp" />
        </swiper-slide>
        <swiper-slide>
          <img src="http://gw.alicdn.com/imgextra/i4/45216016/TB2gNSTtmhlpuFjSspkXXa1ApXa_!!45216016.jpg_760x760q50s150.jpg_.webp" />
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
</style>
