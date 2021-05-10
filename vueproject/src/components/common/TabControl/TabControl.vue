<template>
<div class="Tab">
  <div v-for="(item,index) in text" :class="{active:index===isflag}" :key="index">
       <span @click="active(index)"> {{item}}
           <i :class="{Iacive:index===isflag}"></i>
       </span>
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

<style scoped>
.Tab {
    display: flex;
    background-color: white;
    padding: 15px 0;
    box-shadow: 0px 0px 0px rgba(0,0,0,.4);
    border: 1px solid #e5e5e5;
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
    position: relative;
}
.Iacive{
    display: block;
    position: absolute;
    bottom: -2px;
    content: "";
    width: 31px;
    height: 3px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-image: -webkit-gradient(linear,left top,right top,from(#f5503a),to(#fad1cb));
    background-image: -webkit-linear-gradient(left,#f5503a,#fad1cb);
    background-image: linear-gradient(
        90deg
        ,#f5503a,#fad1cb);
}
</style>
