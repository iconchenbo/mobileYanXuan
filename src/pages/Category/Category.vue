<template>
  <div class="category-wrap">
    <div class="header-wrap">
      <div class="header">
        <div class="category-hd">
          <div class="search">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cate-nav">
      <div class="scroll-container">
        <ul class="list">
          <li class="item" v-for="(category,index) in categorys" :key="index" @click="goto(index)"
              :class="{active:showIndex(index)}">
            <a href="javascript:;" class="txt">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <CategoryDetail :index="index" :categorys="categorys"/>
  </div>
</template>

<script>
  import CategoryDetail from '../../components/GategoryDetail/GategoryDetail.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {

    data(){
      return {
        index:3
      }
    },

    computed:{
      ...mapState(['categorys'])
    },


    mounted(){

      this.$store.dispatch('getCategorys',() => {
        this.$nextTick(() => {
          let scroll = new BScroll('.scroll-container',{
            scrollY: true,
            scrollX:false,
            click: true
          })
        })
      })
    },

    methods:{
      goto(index){
        this.index = index
      },
      showIndex(index){
        return index === this.index
      }
    },

     components:{
       CategoryDetail
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .category-wrap
    .header-wrap
      height (88/$rem)
      .header
        position fixed
        left 0
        top 0
        z-index 1
        width 10rem
        background-color #fff
        .category-hd
          bottom-border-1px(gray)
          padding (0 30/$rem)
          height (88/$rem)
          display flex
          align-items center
          .search
            display flex
            justify-content center
            align-items center
            background-color #ededed
            width 100%
            height (56/$rem)
            border-radius (8/$rem)
            font-size (28/$rem)
            .icon
              display inline-block
              margin-right (10/$rem)
              width (28/$rem)
              height (28/$rem)
              background-image url("./images/search.png")
              background-size 100% 100%
              background-repeat no-repeat
    .cate-nav
      position fixed
      left 0
      top (88/$rem)
      width (162/$rem)
      background-color #fff
      height 100%
      .scroll-container
        position absolute
        width 100%
        height 95%
        right-border-1px(gray)
        .list
          padding (40/$rem 0 138/$rem)
          .item
            margin-top (40/$rem)
            height (50/$rem)
            width 100%
            text-align center
            &:first-child
              margin-top 0
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6/$rem)
                background-color #ab2b2b
                height 100%
              .txt
                font-size (36/$rem)
                color #ab2b2b
            .txt
              display block
              font-size (28/$rem)
              line-height (50/$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333

</style>
