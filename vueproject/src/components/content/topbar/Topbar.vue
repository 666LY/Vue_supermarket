<template>
    <top-bar>
        <div slot="left" class="xiuer">
            <div class="item_col"><img id="off" src="@/assets/img/topbar/off.png" alt=""></div>
            <div class="item_col"><img src="@/assets/img/topbar/miniLogin.png" alt=""></div>
        </div>
            <span slot="center" class="centera">打开手机App，购物更轻松!</span>
            <span slot="right" class="righta">立即打开</span>
    </top-bar>
</template>

<script>
import  TopBar from '@/components/common/topbar/Topbar'
export default {
    components:{
        TopBar
    }
}
</script>

<style scoped>
.xiuer {
    display: flex;
    flex: 1;
}
.xiuer img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.xiuer #off {
    width: 12px;
    padding-left: 10px;
    height: 12px;
}
.xiuer {
    flex: 1;
    text-align: center;
    display: flex;
}
.xiuer div:nth-child(1) {
    flex: 1;
    line-height: 44px;
}
.xiuer div:nth-child(2) {
    flex: 3;
    line-height: 44px;
}
.righta {
    flex: 1;
    text-align: center;
    line-height: 44px;
    background: #f63515;
    color: white;
}
.centera {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    flex: 3;
    text-align: center;
    line-height: 44px;
    color: white;
}



</style>
