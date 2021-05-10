<template>
    <div class="cart_item">
        <div class="content_">
             <div class="choice">
                <i @click="active" :class="{Active_i:checked}"></i>
             </div>
            <div class="img_wrap">
                <img :src="cartList.image" alt="" @load="Imgload">
            </div>
            <div class='description'>
                <div class="title">
                    {{cartList.title}}
                </div>
                <div class="other">
                    <div class="price">
                        ￥{{price}}
                    </div>
                    <div class="numwrap">
                        <span class="reduce" @click="reduceCount"></span>
                        <div class="input_wrap">
                            <input type="text" :value=cartList.count>
                        </div>
                        <span class="add" @click="addCount"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Cart_Item",
    props:{
        cartList:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        active(){
            this.cartList.checked = !this.cartList.checked
        },
        addCount() {
            this.cartList.count++;
        },
        reduceCount() {
          if (this.cartList.count <= 1) {
              return false;
          }
          else {
              this.cartList.count--;
          }
        },
        Imgload(){
            this.$bus.$emit('imageLoad')
        }
    },
    computed:{
        price(){
           return (this.cartList.price * this.cartList.count).toFixed(2)
        },
        checked(){
            return this.cartList.checked
        },
    },
    filters:{
        xiuer(value){
            return '￥' + value;
        }
    }
}
</script>

<style scoped>
.content_ {
   display: flex;
    height: 6rem;
    overflow: hidden;
}
.choice {
 flex:10%;
    position: relative;
}
.choice i {
    position: absolute;
    top:50%;
    width: 100%;
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
.img_wrap {
    flex: 30%;
    padding: 0.3rem;
    background: #fff;

}
.img_wrap img {
    width: 100%;
    height: 100%;
    border-radius: 14px;
}
.description {
    flex: 60%;
    padding: 15px 0;
}
.description .title,.desc {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.description .other {
    width: 100%;
    display: flex;
    margin-top: 1.4rem;
}
.description .other .price {
    flex: 1;
    font-family: JDZH-Regular;
    color: #f2270c;
    font-size: .6rem;
}
.numwrap {
    flex: 1;
    display: flex;
    align-items: flex-end;
 }
.reduce {
    width: .95rem;
    height: 1rem;
    display: block;
    background: url('~@/assets/img/cart/reduce.png') no-repeat 50%;
    background-size: .75rem .75rem;
}
.add {
    width: .95rem;
    height: 1rem;
    display: block;
    background: url('~@/assets/img/cart/add.png') no-repeat 50%;
    background-size: .75rem .75rem;
}
.input_wrap {
    margin: 0 5px;
}
 .input_wrap input {
     -webkit-appearance: none;
     border: none;
     width: 1.8rem;
     line-height: 1rem;
     text-align: center;
     color: #262626;
     background-color: #f2f2f2;
     font-size: .55rem;
     font-family: JDZH-Regular;
 }
</style>
