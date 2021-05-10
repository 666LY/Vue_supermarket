<template>
    <div class="topbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Topbar"
}
</script>

<style scoped>
.topbar {
    display: flex;
    height: 44px;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,.4);
    font-size: 16px;
}
.topbar  .left {
    flex: 1;
    display: flex;

}
.topbar .right {
    display: flex;
    flex: 1;
}
.topbar > .center {
    flex: 3;
    display: flex;
}
</style>
