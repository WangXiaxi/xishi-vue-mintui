export default {
  LOGIN (state, data) { // 设置当前用户信息
    state.user = data
  },
  SET_FOOTERNAVSHOW (state, flag) { // 脚部组件是否显示
    state.FooterNavShow = flag
  }
}
