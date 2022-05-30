import { reqGetOrderInfo } from "@/api";
const state = {
    orderList:{},
};
const mutations = {
    GETORDERLIST(state,orderList){
        state.orderList = orderList;
    }
};
const actions = {
    async getOrderList({commit},id){
        let result = await reqGetOrderInfo(id);
        console.log(result.data);
        if(result.status == 200){
            commit('GETORDERLIST',result.data);
        }
    }
};
const getters = {
    orderList(state){
        return state.orderList.orderList;
    }
};
export default{
    state,
    actions,
    mutations,
    getters
};