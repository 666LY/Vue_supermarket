<template>
  <div id="app">
      <maintoopar/>
      <keep-alive exclude="Detail">     <!--//这里写路由的名字-->
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
import  maintoopar from '@/components/content/Maintoopar/Maintoobar'
export default {
  name: 'App',
  components: {
      maintoopar
  },
}
</script>
<style>
@import "assets/css/base.css";
</style>
