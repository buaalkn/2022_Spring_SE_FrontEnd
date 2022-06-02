import { reqGetRentalInfo } from "@/api";
const state = {
    rentalList:{},
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
        if(result.status == 200){
            commit("GETRENTALLIST",result.data);
        }
    }
};
//项目当中getters的主要的作用是：简化仓库中的数据
    //可以把我们将来在组件中需要的数据简化
const getters = {
    //租房列表
    rentalList(state){
       return state.rentalList.rentallist;
    },
    //租房数量
    rentalNum(state){
        return state.rentalList.count;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};