<template>
    <topbar>
        <span id="rjt" slot="left" @click="Back"/>
        <div class="center" slot="center">
            <span >
              购物车({{length}})
            </span>
        </div>
        <span id="ljt" slot="right">
        </span>
    </topbar>
</template>

<script>
import Topbar from "@/components/common/topbar/Topbar";
import {mapGetters} from 'vuex'
export default {
    name: "detailTopbar",
    components:{
        Topbar
    },
    computed:{
        // ...mapGetters(['getLIst'])
        //两种用法
        ...mapGetters({
            length:'getLIst',
        })
    },
    methods:{
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
