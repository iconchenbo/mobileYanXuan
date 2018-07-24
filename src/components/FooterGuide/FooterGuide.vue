<template>
  <footer class="footer_guide">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <i class="iconfont icon-msite" :class="{on: '/msite'===$route.path}"></i>
      <span class="text">首页</span>
    </span>
    <span class="guide_item" :class="{on: '/shiwu'===$route.path}" @click="goTo('/shiwu')">
      <i class="iconfont icon-shiwu" :class="{on: '/shiwu'===$route.path}"></i>
      <span class="text">识物</span>
    </span>
    <span class="guide_item" :class="{on: '/category'===$route.path}" @click="goTo('/category')">
      <i class="iconfont icon-category" :class="{on: '/category'===$route.path}"></i>
      <span class="text">分类</span>
    </span>
    <span class="guide_item" :class="{on: '/shopcart'===$route.path}" @click="goTo('/shopcart')">
      <i class="iconfont icon-shopcart" :class="{on: '/shopcart'===$route.path}"></i>
      <span class="text">购物车</span>
    </span>
    <span class="guide_item" :class="{on: '/personal'===$route.path}" @click="goTo('/login')">
      <i class="iconfont icon-personal" :class="{on: '/personal'===$route.path}"></i>
      <span class="text">个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 10
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height (98/$rem)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      .iconfont
        display inline-block
        background-image url("./images/footer.png")
        background-repeat no-repeat
        background-size (40/$rem 490/$rem)
        width (40/$rem)
        height (40/$rem)
        vertical-align middle
        &.icon-msite
          background-position (0 -250/$rem)
          &.on
            background-position (0 -200/$rem)
        &.icon-shiwu
          background-position (0 -350/$rem)
          &.on
            background-position (0 -300/$rem)
        &.icon-category
          background-position (0 -150/$rem)
          &.on
            background-position (0 -100/$rem)
        &.icon-shopcart
          background-position (0 -50/$rem)
          &.on
            background-position (0 0/$rem)
        &.icon-personal
          background-position (0 -450/$rem)
          &.on
            background-position (0 -400/$rem)
      &.on
        color #DA989B
      .text
        font-size (24/$rem)
        margin-top (7/$rem)
</style>
