<template>
    <Swiper>
        <SwiperItem v-for="(item,index) in img_" :key="index" class="item">
            <img :src="item" :alt="item">
        </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

export default {
    name: "detailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        img_:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.item {
    height: 250px;
    overflow: hidden;
}
</style>
