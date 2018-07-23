<template>
  <div class="shiwu-wrap">
   <!--头部导航-->
    <ShiwuHeader/>

    <!--轮播区域-->
    <ShiwuCarousel/>

    <!--推荐区域-->
    <ShiwuCommend/>

    <!--推荐详情-->
    <ShiwuRecommend/>

    <!--今日话题-->
    <ShiwuTopic/>

    <!--严选甄品-->
    <ShiwuZhenPin/>

    <!--严选Look-->
    <ShiwuLook/>

    <!--更多精彩-->
    <ShiwuMore/>

  </div>
</template>

<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader.vue'
  import ShiwuCarousel from '../../components/ShiwuCarousel/ShiwuCarousel.vue'
  import ShiwuCommend from '../../components/ShiwuCommend/ShiwuCommend.vue'
  import ShiwuRecommend from '../../components/ShiwuRecommend/ShiwuRecommend.vue'
  import ShiwuTopic from '../../components/ShiwuTopic/ShiwuTopic.vue'
  import ShiwuZhenPin from '../../components/ShiwuZhenPin/ShiwuZhenPin.vue'
  import ShiwuLook from '../../components/ShiwuLook/ShiwuLook.vue'
  import ShiwuMore from '../../components/ShiwuMore/ShiwuMore.vue'

  export default {
    components:{
      ShiwuHeader,
      ShiwuCarousel,
      ShiwuCommend,
      ShiwuRecommend,
      ShiwuTopic,
      ShiwuZhenPin,
      ShiwuLook,
      ShiwuMore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .shiwu-wrap
    padding-top (88/$rem)
    background-color #F4F4F4
    padding-bottom (98/$rem)

</style>
