<template>
  <div class="startPage-wrap">
    <div class="page-top">
      <img src="./images/top1.jpg" alt="">
      <img src="./images/top2.jpg" alt="">
    </div>
    <div class="page-bottom">
      <img src="./images/bottom.jpg" alt="">
      <a href="" class="down-btn"></a>
      <a href="" class="backwap-btn"></a>
      <router-link to="/msite" class="backwap-btn"></router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .startPage-wrap
    max-width 10rem
    background #eee
    position absolute
    top 0
    bottom 0
    z-index 11
    .page-top,.page-bottom
      width 10rem
      margin 0 auto
      img
        vertical-align top
        width 100%
    .page-bottom
      position relative
      .down-btn
        display block
        position absolute
        top (96/$rem)
        left (160/$rem)
        width (432/$rem)
        height (98/$rem)
      .backwap-btn
        display block
        position absolute
        top (230/$rem)
        left (246/$rem)
        width (254/$rem)
        height (30/$rem)
</style>
