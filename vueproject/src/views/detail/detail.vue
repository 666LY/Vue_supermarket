<template>
    <div class="detail" id="detail_">
        <detail-topbar :text="['商品','规格','评论','推荐']" class="nav_top" @navigeation="navigeation" ref="topar"/>
        <scroll class="content" ref="scroll" :type="3"  @postion="position">
            <detail-swiper :img_="topBnner" />      <!--轮播-->
            <detail-baseinfo :goods="goods"/>       <!--商品信息-->
            <detailshopinfo :shop="shop"/>          <!--店家信息-->

            <detail-goodsinfo :detailInfo="detailInfo"
                      @imgLoad="imgLoad"       ref="goods"/>   <!--商品图片介绍-->
            <detail-paramInfo :paramInfo="paramInfo" ref="params"/> <!--规格介绍-->
            <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
            <good-list :goods="recommend" class="recommend" ref="recommend"/>
        </scroll>
        <detail-bot-bar @addCart="addCart"/>
        <backtop @click.native="back" v-show="truth"/>          <!--主件绑定监听需要 native 修饰符-->
<!--        <hint :message="'死亡如风常伴吾身'" :real='true'  />-->
    </div>
</template>

<script>
import detailTopbar from "./detailTopbar/detailTopbar";
import detailSwiper from "./detailTopbar/detailSwiper";
import detailBaseinfo from "./detailTopbar/detailBaseinfo";
import detailshopinfo from "./detailTopbar/detailshopinfo";
import detailGoodsinfo from "./detailTopbar/detailGoodsinfo";
import DetailParamInfo from "./detailTopbar/DetailParamInfo";
import DetailCommentInfo from "./detailTopbar/DetailCommentInfo";
import goodList from "../../components/content/Goods/goodList";
import DetailBotBar from "./detailTopbar/DetailBotBar";
import backtop from "../../components/content/BackTop/backtop";
// import hint from "@/components/common/hint/hint";

//tool
import Scroll from "../../components/common/Package_Scoll/Scroll";
import {MixXiuer} from '@/common/mix.js'
import { mapActions } from 'vuex'

import {Detail,Goods, Shop, Param,recommend} from "../../network/detail";


export default {
    name: "Detail",
    mixins:[MixXiuer],
    components:{
        detailTopbar,
        detailSwiper,
        detailBaseinfo,
        detailshopinfo,
        Scroll,
        detailGoodsinfo,
        DetailParamInfo,
        DetailCommentInfo,
        goodList,
        DetailBotBar,
        backtop,
        // hint
    },
    data(){
        return {
            iid:' ',
            topBnner:[],
            shop:{},
            goods:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:[],
            recommend:[],
            ScrollY:[],
            ScrollYFun:null,
            count:0
        }
    },
    created() {
        //1.获取当前的商品的id
        this.iid = this.$route.params.iid
        //2.根据id发送网络请求
        Detail(this.iid).then(res=>{
            console.log(res);
            const data = res.data.result;
            //1.获取顶部banner
            this.topBnner = data.itemInfo.topImages
            //2.获取商品详情
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
            //3.获取商家详情
            this.shop = new Shop(data.shopInfo)
            //4.获取商家详情图片
            this.detailInfo = data.detailInfo
            //5.获取参数信息
            this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
            //6.获取评论信息
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list
            }
        }).catch(err=>console.log(err))
        //3.获取推荐商品网络请求
        recommend().then(res=>{
            this.recommend = res.data.data.list
        }).catch(err=>console.log(err))

        this.ScrollYFun = ()=>{

            this.ScrollY = []
            this.ScrollY.push(this.$refs.goods.$el.offsetTop)
            this.ScrollY.push(this.$refs.params.$el.offsetTop)
            this.ScrollY.push(this.$refs.comment.$el.offsetTop)
            this.ScrollY.push(this.$refs.recommend.$el.offsetTop)
            console.log(this.ScrollY)

        }
    },
    methods:{
        ...mapActions({
            AddCart:'addCart'
        }),
        imgLoad(){
            console.log('刷新成功')

            this.ScrollYFun()

            this.$refs.scroll.refresh()        //刷新
        },
        navigeation(index){
            this.$refs.scroll.scrollTo(0,-this.ScrollY[index],100)
        },
        position(position){
            this.truth = (-position.y >= 1000) //两种写法
            let Sp = this.ScrollY
            if(-position.y >= 0 && -position.y <= Sp[0]) this.$refs.topar.active = 0
            if(-position.y >= Sp[1] && -position.y < Sp[2]) this.$refs.topar.active = 1
            if(-position.y >= Sp[2] && -position.y < Sp[3]) this.$refs.topar.active = 2
            else if(-position.y >= Sp[3]) this.$refs.topar.active = 3
        },
        addCart(){
            // 1.抽取加入购物车所需的商品信息
            const product = {}
            product.image = this.topBnner[0]
            product.title = this.goods.title
            product.desc  = this.detailInfo.desc
            product.price = this.goods.lowNowPrice
            product.iid = this.iid
            // // 2.将这个对象推送到vuex上
            // this.$store.dispatch('addCart',product).then(res=>{
            //     console.log(res)
            // })
            this.AddCart(product).then(res=>{
                this.$hint.show(res,1500)
            })
        }
    },
    mounted() {
        // console.log('混合呢？')
    },

    destroyed() {
        this.$bus.$off('imageLoad',this.xiuer)
    },
    updated() {
    }
}
</script>

<style scoped>
.detail {
    height: 100vh;
}
.content {
    height: calc(100% - 100px)
}
.nav_top {
    position: relative;
    z-index: 9;
    background: #fff;
}
#detail_ {
    position: relative;
    z-index: 10000;
    background: #fff;
}
.recommend {
    padding-top: 50px;
    position: relative;
    background: white;
    box-sizing: border-box;
}
.recommend::before{
    content: '猜你喜欢';
    position: absolute;
    left: 13px;
    top: 18px;
    right: 0;
    background: white;
    color: #262626;
    font-size: 16px;
    height: 14px;
    line-height: 14px;
    background-color: #fff;
    padding-left: 7px;
    font-weight: 700;
    z-index: 1;
    border-left: 3px solid;
    border-image: linear-gradient(to bottom,#f5503a,#fad1cb) 0 1;
}
</style>
