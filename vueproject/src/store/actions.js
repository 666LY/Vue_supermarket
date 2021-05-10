import  {ACOUNT,ADDCART} from './mutations_type'
export default {
    addCart(context, playlod) {
        return new Promise((res,rej)=>{
            let flag = context.state.cartList.find((item, index) => item.iid === playlod.iid)
            if (flag) {
                context.commit(ACOUNT, flag)
            } else {
                playlod.count = 1;
                context.commit(ADDCART, playlod)
            }
            res('成功加入购物车')
        })
    }
}
