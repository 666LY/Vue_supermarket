<template>
  <div id="app">
      <maintoopar/>
      <router-view/>
  </div>
</template>

<script>
import  maintoopar from 'components/content/Maintoopar/Maintoobar'
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
