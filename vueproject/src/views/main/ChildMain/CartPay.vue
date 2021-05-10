<template>
<div class="pay">
    <div class="Allchecked">
            <i :class="{Active_i:Allchecked}" @click="shut"></i>全选
    </div>
    <div class="total">
        总计: <span>￥{{Allprice}}</span>
    </div>
    <div class="paymoney" @click="buy">
        去结算({{AllLength}}件)
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "CartPay",
    computed:{
        ...mapGetters({
            cart:'getCart'
        }),
        Allprice(){
            return this.cart.filter(item => item.checked).reduce((x,y)=>{
                return x + y.price * y.count
            },0).toFixed(2)
        },
        Allchecked(){
            if(this.cart.length===0) return false;
            return this.cart.every(item => item.checked)
        },
        AllLength(){
            return this.cart.filter(item => item.checked).length
        }
    },
    methods:{
        shut(){
            let a = this.Allchecked;
            this.cart.map(item => item.checked = !a)
        },
        buy(){
            this.$hint.show('请拨打110进行购买')
        }
    }
}
</script>

<style scoped>
.pay{
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    background: hsl(0deg 0% 98% / 95%);
}
.Allchecked {
    flex: 20%;
    position: relative;
}
.total {
    flex: 50%;
    font-family: JDZH-Regular;
}
.total span {
    color: #000;
    font-weight: 600;
}
.paymoney {
    flex: 30%;
    background: #F63515;
    color: white;
}
.Allchecked i {
    position: absolute;
    top:50%;
    left: 0;
    width: 30%;
    transform: translate(0,-50%);
    display: block;
    background: url('~@/assets/img/cart/yet.png') no-repeat 50%;
    background-size: 31px 31px;
    height: 31px;
    vertical-align: middle;
}
.Active_i {
    background: url('~@/assets/img/cart/yes.png') no-repeat 50% !important;
    background-size: 31px 31px !important;
    /*height: 31px !important;*/
}
</style>
