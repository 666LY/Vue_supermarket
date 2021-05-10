<template>
    <div class="wrapper" ref="bb">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BetterScroll from 'better-scroll'
import bsc from "better-scroll";

export default {
    name: "Scroll",
    props:{
        Type:{
            type:Number,
            default:0
        },
        pullUpload:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted() {
       this.scroll =  new BetterScroll(this.$refs.bb, {
           probeType: this.Type,    //监听滚动 类型
           click:true,       //在scroll 里面如果没设置这个click，则包含在之中的点击事件将监听不到
           pullUpLoad:this.pullUpload
        })
        this.scroll.on('scroll',position=>{
            this.$emit('postion',position)
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('Load')
        })
        console.log(this.scroll)
    },
    methods:{
        scrollTo(x,y,time=600){
            this.scroll?.scrollTo?.(x,y,time) //可选链 当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明
        },
        refresh(){
           this.scroll?.refresh?.()
        },
        finishPullUp(){
            this.scroll?.finishPullUp?.()
        }
    }
}
</script>

<style scoped>

</style>
