<template>
    <div id="home" style="height: 100vh">
        <top-bar class="nav_top"></top-bar>
        <tab-control
            ref="tapControl1"
            :text="['京东商城','热销商品','更多推荐']"
            class="tab-control"
            @abc="abc"
            v-show="sticky"
        />
        <scroll class="content" ref="scroll"
                :Type="3"
                @postion="position"
                :pullUpload = 'true'
                @Load = 'Load'
                >
            <home-coms :banners=banners @swiperImgLoad="swiperImgLoad" ></home-coms>
            <home-recommend-view :recommend=recommend></home-recommend-view>
            <fashion></fashion>
            <tab-control
                ref="tapControl2"
                :text="['京东商城','热销商品','更多推荐']"
                @abc="abc"
            />
            <good-list :goods="showgoods"></good-list>
        </scroll>
        <back-top @click.native="back" v-show="truth"/>          <!--主件绑定监听需要 native 修饰符-->
    </div>

</template>


<script>
import TopBar from '@/components/content/topbar/Topbar'
import HomeComs from "@/views/home/childComs/HomeComs";
import HomeRecommendView from "./childComs/HomeRecommendView";
import Fashion from "@/views/home/childComs/Fashion";
import TabControl from "@/components/common/TabControl/TabControl";
import goodList from "@/components/content/Goods/goodList";
//滚动组件
import scroll from '@/components/common/Package_Scoll/Scroll'      //路径一定要检查有没有问题，好难查错
import BackTop from '@/components/content/BackTop/backtop'
//请求响应
import {homeFront, homeLatter} from "@/network/home";
//工具类
// import {debounce} from '@/common/utility/debounce'
import {MixXiuer} from '@/common/mix.js'

export default {
    components: {
        TopBar,
        HomeComs,
        HomeRecommendView,
        Fashion,
        TabControl,
        goodList,
        scroll,
        BackTop
    },
    mixins:[MixXiuer],
    computed: {
        showgoods() {
            return this.good[this.currtype].list
        },
    },
    data() {
        return {
            banners: [],
            recommend: [],
            good: {
                pop: {page: 0, list: []},
                new: {page: 0, list: []},
                sell: {page: 0, list: []}
            },
            currtype: 'pop',
            tabOffsetTop:0,
            sticky:false,        //Tabar 实现把下面那个盖住的效果
            saveY:0,
        }
    },

    created() {
        this.getFront()
        this.getLatter('pop')
        this.getLatter('new')
        this.getLatter('sell')
    },
    mounted() {
        console.log('混合home')
    },
    destroyed() {
        console.log('home主见销毁了')
    },
    activated() {  //进入组件之前调用                   //需要配置 keep-alive
        // alert(2)
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,this.saveY,0)  //使用scrollTop 直接跳转过去

    },
    deactivated() { //退出组件之前调用
        // alert(3)
        this.saveY = this.$refs.scroll.scroll.y     //获取当前滚动的y距离保存起来

        this.$bus.$off('imageLoad',this.xiuer)
    },
    methods: {
        //事件监听相关方法
        abc(index) {
            switch (index) {
                case(0):
                    this.currtype = 'pop'
                    break;
                case(1):
                    this.currtype = 'new'
                    break;
                case(2):
                    this.currtype = 'sell'
                    break;
            }
            this.$refs.tapControl1.isflag = index
            this.$refs.tapControl2.isflag = index
        },
        getFront() {
            homeFront()
                .then(resolve => {
                    this.banners = resolve.data.data.banner.list
                    this.recommend = resolve.data.data.recommend.list;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getLatter(type) {
            const page = this.good[type].page + 1
            homeLatter(type, page)
                .then(resolve => {
                    this.good[type].list.push(...resolve.data.data.list)
                    this.good[type].page += 1
                    this.$refs.scroll.finishPullUp()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Load(){
            this.getLatter(this.currtype)
            // this.$refs.scroll.refresh()
        },
        swiperImgLoad(){
            this.tabOffsetTop = this.$refs.tapControl2.$el.offsetTop
        },
        position(position){
            // -(place.y)>=1000? this.truth = true : this.truth =false
            this.truth = (-position.y >= 1000) //两种写法
            this.sticky = (-position.y) >= this.tabOffsetTop
        },
    }
}


</script>
<style scoped>
#home {
    height: 2000px;
}
.tab-control {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 99;
}
.content {
    height: calc(100% - 80px);
    overflow: hidden;
    position: absolute;
}
.nav_top {
    background: #333333;
}
</style>
