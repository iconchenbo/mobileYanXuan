<template>
  <div id="wrap-container">
     <!--头部导航-->
    <MsiteHeader/>

    <!--轮播图-->
    <MsiteCarousel/>

    <!--品牌厂商-->
    <MsiteBrands/>

    <!--新品首发-->
    <MsiteNewProduct/>

    <!--人气推荐，好物精选-->
    <MsiteSelection/>

    <!--限时购-->
    <!--福利社-->
    <MsiteLimitTime/>

    <!--专题精选-->
    <MsiteTopic/>

    <!--居家好物-->
    <MsiteHome/>

    <!--滚动到顶部-->
    <i class="goto-top" @click="goTop()"></i>

  </div>
</template>

<script>
  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import MsiteCarousel from '../../components/MsiteCarousel/MsiteCarousel.vue'
  import MsiteBrands from '../../components/MsiteBrands/MsiteBrands.vue'
  import MsiteNewProduct from '../../components/MsiteNewProduct/MsiteNewProduct.vue'
  import MsiteSelection from '../../components/MsiteSelection/MsiteSelection.vue'
  import MsiteLimitTime from '../../components/MsiteLimitTime/MsiteLimitTime.vue'
  import MsiteTopic from '../../components/MsiteTopic/MsiteTopic.vue'
  import MsiteHome from '../../components/MsiteHome/MsiteHome.vue'

  export default {
    components:{
      MsiteHeader,
      MsiteCarousel,
      MsiteBrands,
      MsiteNewProduct,
      MsiteSelection,
      MsiteLimitTime,
      MsiteTopic,
      MsiteHome
    },

    methods : {
      goTop(acceleration, time) {
        acceleration = acceleration || 0.1;
        time = time || 16;
        let x1 = 0;
        let y1 = 0;
        let x2 = 0;
        let y2 = 0;
        let x3 = 0;
        let y3 = 0;
        if (document.documentElement) {
          x1 = document.documentElement.scrollLeft || 0;
          y1 = document.documentElement.scrollTop || 0;
        }
        if (document.body) {
          x2 = document.body.scrollLeft || 0;
          y2 = document.body.scrollTop || 0;
        }
        x3 = window.scrollX || 0;
        y3 = window.scrollY || 0;
        // 滚动条到页面顶部的水平距离
        let x = Math.max(x1, Math.max(x2, x3));
        // 滚动条到页面顶部的垂直距离
        let y = Math.max(y1, Math.max(y2, y3));
        // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
        let speed = 1 + acceleration;
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
        // 如果距离不为零, 继续调用迭代本函数
        if (x > 0 || y > 0) {
          let invokeFunction = "goTop(" + acceleration + ", " + time + ")";
          window.setTimeout(this.goTop, time);
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #wrap-container
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .goto-top
      position fixed
      right (23/$rem)
      bottom (120/$rem)
      vertical-align middle
      width (82/$rem)
      height (82/$rem)
      background-image url("./images/top.png")
      background-size (82/$rem 82/$rem)
      z-index 2

</style>
