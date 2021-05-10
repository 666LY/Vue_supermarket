import {debounce} from '@/common/utility/debounce'
export const MixXiuer = {
    mounted() {
        this.xiuer = () => {

            // this.$refs?.scroll?.refresh?.() //通过监听总线，监听图片加载，调用refresh更新容器高度
            //                      // 当不确定改属性是否存在时 强烈推荐使用（可选链），逻辑短路
            hhda()
        }
        let hhda = debounce(this.$refs?.scroll?.refresh, 500)      //防抖函数处理,解决不必要的请求次数

        this.$bus.$on('imageLoad', this.xiuer)
    },
    data(){
        return {
            truth:false,
            xiuer:null
        }
    },
    methods:{
        back() {
            this.$refs.scroll.scrollTo(0, 0)
        },
    }
}
