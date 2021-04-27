<template>
    <div id="home">
        <top-bar></top-bar>
        <home-coms :banners=banners></home-coms>
        <home-recommend-view :recommend=recommend></home-recommend-view>
        <fashion></fashion>
        <tab-control :text="['京东商城','热销商品','更多推荐']" class="sticky" @abc="abc"/>
        <good-list :goods="good[currtype].list"></good-list>
    </div>
</template>


<script>
import TopBar from '@/components/content/topbar/Topbar'
import HomeComs from "@/views/home/childComs/HomeComs";
import HomeRecommendView from "./childComs/HomeRecommendView";
import Fashion from "@/views/home/childComs/Fashion";
import TabControl from "../../components/common/TabControl/TabControl";
import goodList from "../../components/content/Goods/goodList";
//请求响应
import {homeFront, homeLatter} from "@/network/home";

export default {
    components: {
        TopBar,
        HomeComs,
        HomeRecommendView,
        Fashion,
        TabControl,
        goodList
    },
    data() {
        return {
            banners: [],
            recommend: [],
            // keyworld:[],
            // recommend: []
            good: {
                pop: {page: 0, list: []},
                new: {page: 0, list: []},
                sell: {page: 0, list: []}
            },
            currtype: 'pop'
        }
    },

    created() {
        this.getFront()
        this.getLatter('pop')
        this.getLatter('new')
        this.getLatter('sell')
    },
    methods: {
        abc(index) {
            switch (index) {
                case(0): {
                    this.currtype = 'pop'
                    break;
                }
                case(1): {
                    this.currtype = 'new'
                    break;
                }
                case(2): {
                    this.currtype = 'sell'
                    break;
                }
            }
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
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}


</script>

<style>
#home {
    padding-top: 44px;
    height: 2000px;
}

.sticky {
    position: sticky;
    top: 44px;
}
</style>
