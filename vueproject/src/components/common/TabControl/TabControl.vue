<template>
<div class="Tab">
  <div v-for="(item,index) in text" :class="{active:index===isflag}" :key="index">
       <span @click="active(index)"> {{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
    props:{
      text:{
          type:Array,
          default() {
              return [];
          }
      }
    },
    data(){
      return {
          isflag:0,
      }
    },
    methods:{
      active(index){
          this.isflag = index
          this.$emit('abc',index)
      }
    }
}
</script>

<style >
.Tab {
    display: flex;
    background-color: white;
    padding: 15px 0;
    z-index: 999;
    box-shadow: 0px 0px 0px rgba(0,0,0,.4);
    border: 1px solid #f2f2f2;
}
.Tab div {
    flex:1;
    text-align: center;
    font-size: 14px;
    font-width: 600;
    cursor: pointer;
}
.active {
    color: #F63515;
}
.Tab span {
    padding:6px;
    border-bottom: 3px solid var(--color-high-text);
}
</style>
