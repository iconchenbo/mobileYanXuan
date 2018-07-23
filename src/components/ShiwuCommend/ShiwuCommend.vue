<template>
  <div class="commend-wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper list">
        <a href="/" class="swiper-slide my-slide" v-for="(item,index) in columns" :key="index">
          <img :src="item.picUrl" >
          <div class="top-num-wrap">
            <div class="top-num">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['columns'])
    },

    mounted () {

      this.$store.dispatch('getColumns',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            //initialSilde:0,   //这样，可能保证不出一直原位置滑动的BUG
            autoheight: true,   //自动填充高度
            slidesPerView: 'auto'  //保证在一页中，slide有空余时，下一个slide填补一部分
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .commend-wrap
    height (226/$rem)
    margin-bottom (20/$rem)
    padding (32/$rem 30/$rem 28/$rem)
    background-color #fff
    .list
      display flex
      .my-slide
        margin-right (24/$rem)
        width (164/$rem)
        height (210/$rem)
        position relative
        font-size 0
        img
          display block
          width (164/$rem)
          height (164/$rem)
          margin-bottom (22/$rem)
          border-radius (4/$rem)
        .top-num-wrap
          position absolute
          top 0
          right 0
          color #fff
          background url("./images/shadow.png") no-repeat
          background-size 100%
          width (116/$rem)
          height (32/$rem)
          border-radius (0 4/$rem 0 0)
          .top-num
            position absolute
            top 0
            right (8/$rem)
            text-align right    //right和这条样式配合使用，针对宽度不同的问题
            line-height (32/$rem)
            width 2rem
            height (32/$rem)
            font-size (24/$rem)
        .title
          width (184/$rem)
          margin-left (-10/$rem)
          text-align center
          font-size (24/$rem)
          color #333

</style>
