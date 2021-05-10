<template>
    <div class="carlist">
        <scroll class="wrapper" ref="scroll">
            <div class="contenta">
                <cart-item v-for="(item,index) in cart" :cartList="item" />
            </div>
        </scroll>
    </div>
</template>

<script>
import {MixXiuer} from '@/common/mix.js'
import {mapGetters} from 'vuex'
import Scroll from "../../../components/common/Package_Scoll/Scroll";
import CartItem from  './CartItem'
export default {
    name: "Cartlist",
    components:{
        Scroll,
        CartItem
    },
    computed:{
        ...mapGetters({
            cart:'getCart'
        })
    },
    mixins:[MixXiuer],
    mounted() {
        console.log(1232)
    },
    activated() {  //进入组件之前调用                   //需要配置 keep-alive
        this.$refs.scroll.refresh()
    },
    deactivated() { //退出组件之前调用
        this.$bus.$off('imageLoad',this.xiuer)
    },
}
</script>

<style scoped>
.carlist {
    height: 100vh;
    margin-top: .6rem;
}
.wrapper {
    height: calc(100% - 88px);
    overflow: hidden;
}
</style>
