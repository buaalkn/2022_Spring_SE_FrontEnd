import { reqGetRentalInfo } from "@/api";
const state = {
    rentalList:{}
};
const mutations = {
    GETRENTALLIST(state,rentalList){
        state.rentalList = rentalList;
    },
};
const actions = {
    async getRentalList({commit},params = {}){
        //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetRentalInfo(params);
        console.log(result);
        if(result.code == 200){
            commit("GETRENTALLIST",result.data);
        }
    }
}
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}