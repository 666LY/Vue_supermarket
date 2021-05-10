<template>
    <div v-show="real" class="mask" >
        <i></i>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "hint",
    data(){
        return {
            message: '',
            real:false
        }
    },
    // props:{
    //     message:{
    //         type:String,
    //         default: ''
    //     },
    //     real:{
    //         type:Boolean,
    //         default: false
    //     }
    // }
    methods:{
        show(message='请把手机砸烂',duraction=1800) {
            this.real = true
            this.message = message

            setTimeout(()=>{
                this.real = false
            },duraction)
        }
    }
}
</script>

<style scoped>
.mask {
    z-index: 99999;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: auto;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: auto;
    max-width: 270px;
    background-color: rgba(0,0,0,.7);
    padding: 15px;
    text-align: center;
    border-radius: 6px;
    color: #333;
    overflow: hidden;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 30%);
}
.mask i {
    display: block;
    width: 50px;
    height: 50px;
    margin: 5px auto 10px;
    background: url('~@/assets/img/cart/allright.png') no-repeat;
    background-size: 50px auto;
}
.mask p {
    font-size: 14px;
    color: #FFFFFF;
}
</style>
