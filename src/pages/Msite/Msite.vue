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

    <i class="go-top"></i>

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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #wrap-container
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .go-top
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
