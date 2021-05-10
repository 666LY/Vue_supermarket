<template>
    <xin>
        <tooparitem :path="'/main'">
            <img src="@/assets/img/toobar/mainpage.png" alt="" slot="icon"/>
            <img src="@/assets/img/toobar/jdactive.png" alt="" slot="Activeicon"/>
        </tooparitem>
        <tooparitem :path="'/jd'">
            <img src="@/assets/img/toobar/fnei.png" alt="" slot="Activeicon"/>
            <img src="@/assets/img/toobar/fneiactive.png" alt="" slot="icon"/>
        </tooparitem>
        <tooparitem :path="'/home'">
            <img src="@/assets/img/toobar/shopping.png" alt="" slot="icon"/>
            <img src="@/assets/img/toobar/shoppingactive.png" alt="" slot="Activeicon"
                 style="width:40px;height:40px"/>
        </tooparitem>
        <tooparitem :path="'/login'" :activeStyle="'deeppink'">
            <img src="@/assets/img/toobar/unlogin.png" alt="" slot="icon"/>
            <img src="@/assets/img/toobar/smile.png" alt="" slot="Activeicon" style="width:30px;height:30px"/>
            <div>🐷上</div>
        </tooparitem>
    </xin>
</template>

<script>
import toopar from "@/components/common/toobar/toobar";      //在引入文件时不需要加~号，而在标签里面请求静态资源时要加~
import tooparitem from "@/components/common/toobar/toobar_item";

export default {
    name: "App",
    components: {
        xin: toopar,
        tooparitem
    }
};
</script>

<style>

</style>
