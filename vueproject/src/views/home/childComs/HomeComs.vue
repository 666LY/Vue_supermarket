<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title" @load="imageload">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

export default {
    name: "HomeComs",
    components: {
        Swiper,
        SwiperItem
    },
    data() {
        return {
            sign:false
        }
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        imageload(){
           if(!this.sign) {
               this.$emit('swiperImgLoad')
               this.sign = true
           }
        }
    }
}
</script>

<style >

</style>
