import { reqRentalDetail } from "@/api";
import { completeRenting } from "@/api";
const state = {
    rentalDetail:{},
    isRent:{},
};
const mutations = {
    GETRENTALDETAIL(state,rentalDetail){
        state.rentalDetail = rentalDetail;
    },
    COMPLETERENTING(state,isRent){
        state.isRent = isRent;
    },
};
const actions = {
    //租房详情
    async getRentalDetail({commit},id){
        let result = await reqRentalDetail(id);
        if(result.status==200){
            commit('GETRENTALDETAIL',result.data);
        }
    },
    //完成租房
    async completeRenting({commit},params = {}){
        let result = await completeRenting(params);
        if(result.status == 200){
            commit("COMPLETERENTING",result.data);
        }
    }
};
const getters = {
    //租房详情
    rentalDetail(state){
        return state.rentalDetail||[];
    },
    //租房是否成功
    isRent(state){
        return state.isRent;
    }
};
export default{
    state,
    actions,
    mutations,
    getters
};