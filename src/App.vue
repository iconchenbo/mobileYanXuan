<template>
  <div id="app">
    <!--路由组件-->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!--底部组件-->
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
