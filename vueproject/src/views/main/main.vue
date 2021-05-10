<template>
    <div class="main">
        <nav_topbar/>
        <cartlist/>
        <cart-pay/>
    </div>
</template>

<script>

import nav_topbar from "./ChildMain/nav_topbar";
import Cartlist from "./ChildMain/Cartlist";
import CartPay from "@/views/main/ChildMain/CartPay";
export default {
  components:{
      nav_topbar,
      Cartlist,
      CartPay
  },
}
</script>

<style scoped>
.nav_Top {
    height: 44px;
    background: #FFFFFF;
}
.nav_Top span {
    text-align: center;
    color: #333333;
}
</style>
