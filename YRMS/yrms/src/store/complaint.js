import { complaint } from "@/api";
const state = {
    isComplaint:{},
};
const mutations = {
    COMPLAINT(state,isComplaint){
        state.isComplaint = isComplaint;
    }
};
const actions = {
    async complaint({commit},params = {}){
        let result = await complaint(params);
        // console.log(result);
        if(result.status == 200){
            commit('COMPLAINT',result.data);
        }
    }
};
const getters = {
    isComplaint(state){
        return state.isComplaint;
    }
};
export default{
    state,
    actions,
    mutations,
    getters,
};
