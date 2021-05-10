<template>
  <div class="flex_item" @click="Activeing">
    <div v-if="isActive">
        <slot name="Activeicon"></slot>
    </div>
    <div v-else>
        <slot name="icon"></slot>
    </div>
    <div :style="CactiveStyle">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeStyle:{
            type:String,
            default:'pink'
        }
    },
    data(){
        return {
            // isActive:true,
        }
    },
    computed:{
        isActive(){
           return this.$route.path.indexOf(this.path) !== -1;
        },
        CactiveStyle(){
            return this.isActive ? {color:this.activeStyle} : {}
        }
    },
    methods:{
        Activeing(){
            this.$router.replace(this.path)
        }
    }
};
</script>

<style>
#flex_div .flex_item  img {
    width: 80%;
    height: 80%;
}
#flex_div .flex_item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.active {
    color: red;
}
</style>
