import {completeAddRental} from "@/api";
const state ={
    addRental:{},
};
const mutations = {
    ADDRENTAL(state,addRental){
        state.addRental = addRental;
    }
};
const actions ={
    async addRental({commit},params ={}){
        let result = await completeAddRental(params);
        // console.log(result);
        if(result.status == 200){
            commit("ADDRENTAL",result.data);
        }
    }
};
const getters ={
    isAdd(state){
        return state.addRental.isAdd;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};