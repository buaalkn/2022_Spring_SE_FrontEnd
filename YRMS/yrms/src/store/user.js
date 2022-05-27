import { reqGetCode } from "@/api";
import { Result } from "element-ui";
//登录注册模块
const state = {};
const mutations = {};
const action = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        console.log(result);
    }
};
const getters = {};

export default {
    state,
    mutations,
    action,
    getters
}