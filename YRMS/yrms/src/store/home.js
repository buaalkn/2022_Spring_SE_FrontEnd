import { reqRecommend } from "@/api";
const state = {
    recommend:{},
};
const mutations = {
    GETRECOMMEND(state,recommend){
        state.recommend = recommend;
    },
};
const actions = {
    async getRecommend({commit}){
        let result = await reqRecommend();
        console.log(result);
        if(result.status == 200){
            commit("GETRECOMMEND",result.data);
        }
    }
};
const getters = {
    //推荐列表
    recommend(state){
       return state.recommend.recommedlist;
    },
};
export default{
    state,
    mutations,
    actions,
    getters
};