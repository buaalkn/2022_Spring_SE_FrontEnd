import { reqGetCode } from "@/api";
import { reqUserRegister } from "@/api";
import { reqUserLogin } from "@/api";
import { reqUserLoginWithVfCode } from "@/api";
import { reqUserInfo } from "@/api";


//登录注册模块
const state = {
    code: '',
    id: '',
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, id) {
        state.id = id;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        //console.log(result);

        if (result.status == 200) {
            commit("GETCODE", result.data);
            return '获取验证码成功'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        //console.log(result);

        if (result.status == 200) {
            return '注册成功';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //用户登录【id】
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        //console.log(result);

        //服务器下发的token 是每个用户唯一的标识符
        //通过带token的找服务器要信息
        if (result.status == 200) {
            commit("USERLOGIN", result.data.id);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //验证码登录
    async reqUserLoginWithVfCode({ commit }, data) {
        let result = await reqUserLoginWithVfCode(data);
        //console.log(result);

        //服务器下发的token 是每个用户唯一的标识符
        //通过带token的找服务器要信息
        if (result.status == 200) {
            commit("USERLOGIN", result.data.id);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        console.log(result);
        //提交用户信息
        if (result.status == 200) {
            commit("GETUSERINFO", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
        // commit("GETUSERINFO", result.data);

    },

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}