<template>
  <div class="login-wrap">
    <Login/>
    <div class="login-type-wrap" v-show="isShow">
      <div class="login-type">
        <div class="content">
          <div class="logo-wrap">
            <img src="./images/logo.png">
          </div>
          <div class="btn-wrap">
            <div class="w-button phone-button" @click="phoneLogin">
              <i class="b-icon icon-phone"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button email-button" @click="emailLogin">
              <i class="b-icon icon-email"></i>
              <span>邮箱帐号登录</span>
            </div>
            <div class="btn">
              <span>手机号快捷注册</span>
              <i class="icon-right"></i>
            </div>
          </div>
        </div>

        <div class="three-wrap">
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-wechat"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-qq"></i>
              <span class="name">QQ</span>
            </span>
          </div>
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-weibo"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="login-container" v-show="!isShow">
      <!--手机登陆-->
      <div class="view" v-show="!loginWay">
        <div class="logo">
          <img src="./images/logo.png">
        </div>
        <div class="user-box">
          <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone">
          <div class="code-wrap">
            <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code">
            <div class="test-code">
              <button class="code-btn" :disabled="!rightPhone"
                      @click.prevent="getCode" :class="{'right-phone': rightPhone}">
                {{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}
              </button>
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          <div class="w-button phone-button" @click="login">
            <i class="b-icon icon-phone"></i>
            <span>登录</span>
          </div>
          <div class="w-button email-button" @click="phoneLogin">
            <i class="b-icon icon-email"></i>
            <span>其他方式登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="icon-right"></i>
          </div>
        </div>
      </div>
      <!--邮箱账号登陆-->
      <div class="view" v-show="loginWay">
        <div class="logo">
          <img src="./images/logo.png">
        </div>
        <div class="user-box">
          <input type="text" maxlength="11" placeholder="邮箱账号" v-model="email">
          <div class="code-wrap">
            <input type="text" maxlength="6" placeholder="密码" v-model="pwd">
          </div>
        </div>
        <div class="btn-wrap">
          <div class="w-button phone-button" @click="login">
            <i class="b-icon icon-phone"></i>
            <span>登录</span>
          </div>
          <div class="w-button email-button" @click="emailLogin">
            <i class="b-icon icon-email"></i>
            <span>其他方式登录</span>
          </div>
        </div>
      </div>
      <div class="space"></div>
    </div>



    <AlertTip v-show="alertShow" :alertText="alertText" @closeTip="closeTip1"></AlertTip>
  </div>
</template>

<script>
  import Login from '../../components/ShiwuHeader/ShiwuHeader.vue'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'

  export default{

    data() {
      return {
        isShow: true,  //是否显示登陆页面
        alertShow:false, //是否显示提示框
        alertText:'', //提示文本
        loginWay:true,  //切换登陆方式
        phone:'',
        code:'',
        email:'',
        pwd:'',
        computeTime: 0, // 倒计时剩余的时间
      }
    },

    computed:{

      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },

    methods:{
      //切换到手机号码登陆
      phoneLogin(){
        this.isShow = !this.isShow
        this.loginWay = !this.loginWay
      },
      //切换到邮箱登陆
      emailLogin(){
        this.isShow = !this.isShow
      },
      //点击时，关闭提示框，并清空提示文字
      closeTip1(){
        this.alertShow = false
        this.alertText = ''
      },
      //是否显示提示框
      showAlert(alertText){
        this.alertShow = true
        this.alertText = alertText
      },
      //异步登陆
      login(){
        //作为接收2种登陆方式，返回的结果
        let result
        const {phone,rightPhone,code,showAlert} = this
        if(!this.loginWay){
          if (!rightPhone){
            showAlert('电话格式错误')
          } else if(!/^\d{6}$/.test(code)){
            showAlert('验证码格式错误')
          }else {
            this.$router.replace('/msite')
          }
        }else {
          const {email,pwd} = this
          if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)){
            showAlert('邮箱格式错误')
          }else if (!pwd){
            showAlert('密码必须指定')
          }else {
            this.$router.replace('/msite')
          }
        }
      },
      //获取短信验证码
      getCode(){
        if(!this.computeTime){
          this.computeTime = 60
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime <= 0){
              clearInterval(this.intervalId)
            }
          },1000)
        }
      }
    },

    components:{
      Login,
      AlertTip
    }

  }



</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .login-wrap
    .login-type-wrap
      background-color #F4F4F4
      position relative
      padding-top (88/$rem)
      z-index 11
      .login-type
        height 100%
        background #F2F5F4
        position relative
        .content
          padding-bottom (548/$rem)
          .logo-wrap
            text-align center
            padding (160/$rem 0)
            img
              width (268/$rem)
              height (90/$rem)
          .btn-wrap
            padding (0 40/$rem)
            .w-button
              border-radius (6/$rem)
              margin-bottom (32/$rem)
              text-align center
              color #fff
              border 1px solid #b4282d
              font-size (28/$rem)
              vertical-align middle
              &.phone-button
                height (94/$rem)
                line-height (94/$rem)
                background-color #b4282d
              &.email-button
                height (94/$rem)
                line-height (94/$rem)
                color #b4282d
              .b-icon
                position relative
                top (-2/$rem)
                margin-right (10/$rem)
                background-image url("./images/xb1.png")
                background-size (40/$rem 290/$rem)
                background-repeat no-repeat
                vertical-align middle
                width (40/$rem)
                height (40/$rem)
                display inline-block
                &.icon-phone
                  background-position (0 -50/$rem)
                &.icon-email
                  background-position (0 0)
            .btn
              text-align center
              font-size (28/$rem)
              color #333
              .icon-right
                display inline-block
                vertical-align bottom
                width (28/$rem)
                height (28/$rem)
                background-image url("./images/right.png")
                background-size 100% 100%
                background-repeat no-repeat
        .three-wrap
          position absolute
          left 0
          bottom (80/$rem)
          width 100%
          text-align center
          .item-wrap
            display inline-block
            text-align center
            height (40/$rem)
            padding-right (25/$rem)
            border-right 1px solid #979797
            font-size 0
            &:last-child
              border none
            &:nth-child(2)
            .item
              display inline-block
              .icon
                vertical-align middle
                display inline-block
                width (40/$rem)
                height (40/$rem)
                background-size 100% 100%
                background-repeat no-repeat
                &.icon-wechat
                  background-image url("./images/wechat.png")
                &.icon-qq
                  background-image url("./images/qq.png")
                &.icon-weibo
                  background-image url("./images/weibo.png")
              .name
                vertical-align middle
                color #7F7F7F
                font-size (28/$rem)
    .login-container
      padding-top (88/$rem)
      z-index 11
      position relative
      .view
        .logo
          margin-top (150/$rem)
          text-align center
          > img
            width (192/$rem)
            height (64/$rem)
        .user-box
          margin-top (100/$rem)
          font-size (30/$rem)
          padding (0 40/$rem)
          input
            border-bottom 1px solid #d4d4d4
            padding-bottom (30/$rem)
            padding-left (16/$rem)
            width 100%
            margin (20/$rem 0)
            outline 0
          .code-wrap
            position relative
            .test-code
              position absolute
              top (12/$rem)
              right 0
              padding (10/$rem)
              border-radius (10/$rem)
              border 1px solid #333
              .code-btn
                border 0
                color #ccc
                background transparent
                font-size (30/$rem)
                &.right-phone
                  color black
        .btn-wrap
          padding (100/$rem 40/$rem 0)
          .w-button
            border-radius (6/$rem)
            margin-bottom (32/$rem)
            text-align center
            color #fff
            border 1px solid #b4282d
            font-size (28/$rem)
            vertical-align middle
            &.phone-button
              height (94/$rem)
              line-height (94/$rem)
              background-color #b4282d
            &.email-button
              height (94/$rem)
              line-height (94/$rem)
              color #b4282d
            .b-icon
              position relative
              top (-2/$rem)
              margin-right (10/$rem)
              background-image url("./images/xb1.png")
              background-size (40/$rem 290/$rem)
              background-repeat no-repeat
              vertical-align middle
              width (40/$rem)
              height (40/$rem)
              display inline-block
              &.icon-phone
                background-position (0 -50/$rem)
              &.icon-email
                background-position (0 0)
          .btn
            text-align center
            font-size (28/$rem)
            color #333
            .icon-right
              display inline-block
              vertical-align bottom
              width (28/$rem)
              height (28/$rem)
              background-image url("./images/right.png")
              background-size 100% 100%
              background-repeat no-repeat
      .space
        width 100%
        height (150/$rem)
        background-color white
        z-index 11
        margin-top (220/$rem)


</style>
