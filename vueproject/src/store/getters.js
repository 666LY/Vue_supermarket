export default {
    getLIst(state,getter){
        return state.cartList.length
    },
    getCart(state){
        return state.cartList
    },
    getCartChecked(state){
        return state.cartList.checked
    },
}
