<template>
  <div class="personal-wrap">
   <!--头部导航-->
    <PerSonal/>

    <div class="login-wrap">
      <div class="my-login-wrap">
        <div class="cont">
          <div class="logo-wrap">
            <img src="./images/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
          </div>
          <div class="btn-wrap">
            <div class="my-btn btn1">
              <i class="my-icon icon1"></i>
              <span class="tex">手机号码登陆</span>
            </div>
            <div class="my-btn btn2">
              <i class="my-icon icon2"></i>
              <span class="tex">邮箱账号登陆</span>
            </div>
            <div class="btn">
              <span class="tex">手机号快捷注册</span>
              <i class="my-icon icon-right"></i>
            </div>
          </div>
        </div>
        <div class="bottom-wrap">
          <div class="item-wrap item-wrap1">
            <span class="item">
              <i class="icon icon1"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="item-wrap item-wrap2">
            <span class="item">
              <i class="icon icon2"></i>
              <span class="name">QQ</span>
            </span>
          </div>
          <div class="item-wrap item-wrap3">
            <span class="item">
              <i class="icon icon3"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import PerSonal from '../../components/ShiwuHeader/ShiwuHeader.vue'

  export default {

    components:{
      PerSonal
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .personal-wrap
    margin-top (88/$rem)
    background-color #F4F4F4
    padding-bottom (98/$rem)
    .login-wrap
      height (1248/$rem)
      .my-login-wrap
        position relative
        height 100%
        background #F2F5F4
        z-index 11
        .cont
          width 100%
          height (704/$rem)
          .logo-wrap
            text-align center
            padding-top (157/$rem)
            padding-bottom (157/$rem)
            img
              width (268/$rem)
              height (90/$rem)
          .btn-wrap
            padding (0 45/$rem)
            margin-bottom (230/$rem)
            .my-btn
              display block
              width 100%
              height (94/$rem)
              line-height (94/$rem)
              margin-bottom (34/$rem)
              border-radius (4/$rem)
              vertical-align middle
              text-align center
              font-size (32/$rem)
              color white
              border (2/$rem) solid #b4282d
              background-color #b4282d
              overflow hidden
              &.btn2
                background-color #F4F4F4
                color #b4282d
              .icon1
                background-position (0 -55/$rem)
              .my-icon
                margin-right (18/$rem)
                position relative
                background-image url("./images/xb1.png")
                background-size 100%
                width (45/$rem)
                height (45/$rem)
                display inline-block
                vertical-align middle
                background-repeat no-repeat
            .btn
              color black
              font-size (30/$rem)
              text-align center
              width 100%
              .icon-right
                position absolute
                margin-right (18/$rem)
                display inline-block
                vertical-align middle
                background-image url("images/right.png")
                background-repeat no-repeat
                background-size 100%
                width (30/$rem)
                height (30/$rem)
        .bottom-wrap
          position absolute
          width 100%
          left 0
          bottom (90/$rem)
          text-align center
          height (45/$rem)
          .item-wrap
            height (45/$rem)
            border-right (2/$rem) solid #979797
            display inline-block
            text-align center
            padding 0 (20/$rem)
            line-height (45/$rem)
            &.item-wrap3
              border-right transparent
            .item
              height (45/$rem)
              position relative
              top (-10/$rem)
              display inline-block
              .icon
                background-image url("./images/wechat.png")
                background-size 98%
                position relative
                display inline-block
                width (45/$rem)
                height (45/$rem)
                vertical-align middle
                &.icon2
                  background-image url("./images/qq.png")
                &.icon3
                  background-image url("./images/weibo.png")
              .name
                height (45/$rem)
                color #7F7F7F
                font-size (28/$rem)
                line-height (45/$rem)
                display inline-block
                vertical-align middle
                margin-left (-15/$rem)



</style>
