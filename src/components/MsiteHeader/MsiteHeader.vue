<template>
  <div class="nav-header">
    <div class="header">
      <a href="" class="logo"></a>
      <div class="search">
        <i class="icon"></i>
        <span class="serach-content">搜索商品，共97565款好物</span>
      </div>
    </div>
    <div class="wrapper">
      <ul class="content">
        <li class="tab active">
          <span class="text">推荐</span>
        </li>
        <li class="tab" v-for="(headCate,index) in headCates" :key="index">
          <span class="text">{{headCate.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'

  export default {

   computed:{
     ...mapState(['headCates'])
   },

   methods:{
     ...mapActions(['getHeadCateList'])
   } ,



    mounted(){

        this.getHeadCateList()

        this.$nextTick(() => {
          let scroll = new BScroll('.wrapper',{
            probeType:2,
            scrollY: false,
            scrollX:true,
            click: true
          })
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .nav-header
    position fixed!important
    z-index 5
    left 0
    top 0
    width 100%
    background #fff
    .header
      display flex
      align-items center
      padding (16/$rem 30/$rem)
      .logo
        width (138/$rem)
        height (40/$rem)
        background-image url("./images/logo.png")
        display inline-block
        margin-right (20/$rem)
        background-position center
        background-size cover
      .search
        display flex
        flex-grow 1
        align-items center
        justify-content center
        height: (56/$rem)
        font-size: (28/$rem)
        background-color: #ededed;
        border-radius: (8/$rem)
        .icon
          display inline-block
          vertical-align middle
          background-image url("./images/search.png")
          background-repeat no-repeat
          background-size (100% 100%)
          width (28/$rem)
          height (28/$rem)
          margin-right (10/$rem)
        .search-content
          color #666
          display block
    .wrapper
      overflow hidden
      display flex
      background #fff
      .content
        display flex
        flex-shrink 0
        background #fff
        .tab
          position relative
          margin-left (48/$rem)
          &.active
            color #b4282d
            &::after
              content ''
              position absolute
              left 0
              bottom 0
              height (4/$rem)
              width (100/$rem)
              background-color #b4282d
          .text
            padding (0 16/$rem)
            line-height (60/$rem)
            font-size (28/$rem)
            text-align center
</style>
