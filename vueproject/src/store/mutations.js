import  {ACOUNT,ADDCART} from './mutations_type'
export default {
    [ACOUNT](state, playload) {
        playload.count +=1
    },
    [ADDCART](state,playload){
        playload.checked = true
        state.cartList.push(playload)
    }
}
