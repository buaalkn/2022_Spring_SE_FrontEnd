import {reqOrderDetail} from "@/api";
import { deleteOrder } from "@/api";
import { continueOrder } from "@/api";
const state = {
    orderDetail:{},
    deleteOrder:{},
    continueOrder:{},
};
const mutations ={
    GETORDERDETAIL(state,orderDetail){
        state.orderDetail = orderDetail;
    },
    DELETEORDER(state,deleteOrder){
        state.deleteOrder = deleteOrder;
    },
    CONTINUEORDER(state,continueOrder){
        state.continueOrder = continueOrder;
    }
};
const actions ={
    //获取订单详细信息
    async getOrderDetail({commit},id){
        let result = await reqOrderDetail(id);
        // console.log(result);
        if(result.status==200){
            commit('GETORDERDETAIL',result.data);
        }
    },
    //删除订单
    async deleteOrder({commit},params = {}){
        let result = await deleteOrder(params);
        // console.log(result);
        if(result.status==200){
            commit('DELETEORDER',result.data);
        }
    },
    //续约长租订单
    async continueOrder({commit},params={}){
        let result = await continueOrder(params);
        // console.log(result);
        if(result.status==200){
            commit('CONTINUEORDER',result.data);
        }
    }
};
const getters ={
    orderDetail(state){
        return state.orderDetail;
    },
    isDelete(state){
        return state.deleteOrder;
    },
    isContinue(state){
        return state.continueOrder;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}