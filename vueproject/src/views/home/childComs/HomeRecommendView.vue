<template>
<div class="recommed">
    <div v-for="item in recommend">
        <a :href="item.link">
            <img :src="item.image" :alt="item.title">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: "HomeRecommendView",
    props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
    }
}
</script>

<style scoped>
.recommed {
    display: flex;
    border-bottom: 10px solid #ededed;
}
.recommed > div {
    flex:1;
    padding: 10px 13px;
    text-align: center;
}
.recommed img {
    width: 100%;
    vertical-align: middle;
}
.recommed img + div {
    font-size: 14px;
    margin-top: 8px;
}
</style>
