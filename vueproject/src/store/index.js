import vuex from 'vuex'
import vue from "vue";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

vue.use(vuex)

const state = {
    cartList: []
}
const store = new vuex.Store({
    state,
    mutations,
    actions,
    getters,
})

export default store
