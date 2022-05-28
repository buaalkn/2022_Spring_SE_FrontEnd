import { reqGetCode, reqUserRegister, reqUserLogin, reqUserLoginWithVfCode } from "@/api";
import { Result } from "element-ui";
//登录注册模块
const state = {
    code: '',
    token: '',
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return 'ok'
        }
        // console.log(result);
        else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户登录【token】
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        //服务器下发的token 是每个用户唯一的标识符
        //通过带token的找服务器要信息
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //验证码登录
    async reqUserLoginWithVfCode({ commit }, data) {
        let result = await reqUserLoginWithVfCode(data);
        //服务器下发的token 是每个用户唯一的标识符
        //通过带token的找服务器要信息
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    }

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}