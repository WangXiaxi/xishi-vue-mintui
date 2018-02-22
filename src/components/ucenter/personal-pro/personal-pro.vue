<template>
  <div class="personal-pro">
    <HeaderPub headerTitle="资料修改"></HeaderPub>
    <div class="personal-pro-box">
      <div class="page-field">
        <div class="page-part">
          <a class="mint-cell mint-field">
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title"><span class="mint-cell-text">头像</span></div>
              <div class="mint-cell-value">
                <img src="./header.png">
              </div>
              <div class="edit-header-img">修改头像</div>
            </div>
          </a>
          <mt-field label="昵称" placeholder="请输入您的昵称" v-model="username"></mt-field>
          <mt-field label="email" placeholder="Input email" type="email" v-model="email"></mt-field>
          <mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
          <mt-field label="birthday" placeholder="birthday" type="date" v-model="birthday"></mt-field>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from 'header/header-pub/header-pub'
export default {
  components: {
    HeaderPub
  },
  data () {
    return {
      username: '',
      email: '',
      phone: '',
      birthday: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .personal-pro
    width: 100%
    height: 100%
    display: flex
    box-orient: vertical
    flex-direction: column
    position: relative
    .personal-pro-box
      flex: 1
      overflow-y: scroll
      -webkit-overflow-scrolling: touch
      .page-field
        .page-part
          position: relative
          .mint-cell-wrapper
            background: none
          .mint-cell-value
            text-align: right
            width: 100%
            img
              height: 1.6rem
              width: 1.6rem
              border-radius: 50%
              padding: 0.2rem
          .edit-header-img
            font-size: $font-size-medium
            color: $color-background-999
</style>
