<template>
    <top-bar>
        <div slot="left" class="xiuer">
            <div class="item_col"><img id="off" src="@/assets/img/topbar/off.png" alt=""></div>
            <div class="item_col"><img src="@/assets/img/topbar/miniLogin.png" alt=""></div>
        </div>
        <span slot="center">打开手机App，购物更轻松!</span>
        <span slot="right">立即打开</span>
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

<style>
.topbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: var(--color-text);
}
.topbar .left {
    flex: 1;
    flex-shrink: 0.1;
}
.topbar .center {
    flex: 3;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 600;
    color: white;
}
.topbar .right {
    flex: 1.3;
    background-color: #F63515;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0;
}
.topbar .left #off {
    width: 10px;
    height: 10px;
}
.topbar .left  img {
       width: 30px;
       height: 30px;
       vertical-align: middle;
   }
.item_col {
    flex: 0.5;
}
.item_col:last-child {
    flex: 1;
}
.item_col:first-child{
    width: 20px!important;
}

.xiuer {
    display: flex;
    justify-content: center;
}
</style>
