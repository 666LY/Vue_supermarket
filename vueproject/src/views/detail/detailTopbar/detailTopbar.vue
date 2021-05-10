<template>
    <topbar>
        <span id="rjt" slot="left" @click="Back"/>
        <div class="center" slot="center">
            <span v-for="(item,index) in text" @click="Active(index)" :class="{active_C:index === active}">
                {{item}}
                <i :class="{Active_I:index === active}"></i>
            </span>
        </div>
        <span id="ljt" slot="right">
        </span>
    </topbar>
</template>

<script>
import Topbar from "../../../components/common/topbar/Topbar";
export default {
    name: "detailTopbar",
    components:{
        Topbar
    },
    data(){
        return{
            active:0,
            trust:false
        }
    },
    props:{
        text:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        Active(index){
            this.active = index
            this.$emit('navigeation',index)
        },
        Back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.center {
    flex: 1;
    display: flex;
}
.center span {
    flex: 1;
    line-height: 44px;
    text-align: center;
    position: relative;
    font-size: 14px
}
.Active_I {
    display: block;
    position: absolute;
    bottom: 6px;
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
#rjt {
    background: url("~@/assets/img/right.png") no-repeat 15px 11px ;
    flex: 1;
    background-size: 30%;
}
#ljt {
    background: url("~@/assets/img/point.png") no-repeat 90% 50%;
    flex: 1;
    background-size: 40%;
}
</style>
