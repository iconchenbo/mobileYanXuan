<template>
  <div class="carousel-wrap">
    <div class="swiper">
      <div class="swiper-container swiper-inner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusList,index) in focusLists" :key="index">
            <img :src="focusList.picUrl">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="my-swiper-pagination swiper-pagination"></div>
      </div>
    </div>
    <div class="footer-container">
      <ul class="footer">
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="/">
            <i class="icon"></i>
            <span class="txt">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['focusLists'])
    },


    mounted () {

      this.$store.dispatch('getFocusList',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-inner1', {
            pagination: {
              el: '.swiper-pagination',   //分页器
              chickable:true
            },
            loop: true,  //实现无缝
            autoheight:true
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .carousel-wrap
    margin-top (148/$rem)
    margin-bottom (20/$rem)
    .swiper
      height (400/$rem)
      .swiper-inner1
        height 100%
        img
          width 100%
          height 100%
        .my-swiper-pagination
          bottom (30/$rem)
          font-size 0
          .swiper-pagination-bullet
            width (40/$rem)
            height (4/$rem)
            display: inline-block;
            background: seagreen;
            opacity: .4;
            margin-right (10/$rem)
          .swiper-pagination-bullet-active
            opacity 1
            background-color salmon

    .footer
      height (72/$rem)
      padding (0 30/$rem)
      display flex
      align-items center
      background-color #fff
      .item
        flex 1
        font-size 0
        .icon
          background-image url("images/icon/arrow.png")
          background-size (100% 100%)
          display inline-block
          width (32/$rem)
          height (32/$rem)
          vertical-align middle
        .txt
          font-size (24/$rem)
          color #333
          margin-left (8/$rem)
          line-height (32/$rem)
          display inline-block
          vertical-align middle
</style>
