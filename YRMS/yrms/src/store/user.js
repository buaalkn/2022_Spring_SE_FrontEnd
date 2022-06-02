import { reqGetCode } from "@/api";
import { reqUserRegister } from "@/api";
import { reqUserLogin } from "@/api";
import { reqUserLoginWithVfCode } from "@/api";
import { reqUserInfo } from "@/api";
import { reqLogout } from "@/api";


//登录注册模块
const state = {
    code: '',
    id: localStorage.getItem('ID'),
    userInfo: {},
    username: localStorage.getItem('USERNAME'),
    // userInfo: localStorage.getItem('USERNAME'),
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
    //清除数据
    CLEAR(state) {
        state.id = '';
        state.userInfo = {};
        //清除本地存储的数据
        localStorage.removeItem("ID");
        localStorage.removeItem("USERNAME");
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, data) {
        let result = await reqGetCode(data);
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

        //服务器下发的id 是每个用户唯一的标识符
        //通过带id的找服务器要信息
        if (result.status == 200) {
            commit("USERLOGIN", result.data.id);
            //持久化存储id
            localStorage.setItem("ID", result.data.id);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //验证码登录
    async reqUserLoginWithVfCode({ commit }, data) {
        let result = await reqUserLoginWithVfCode(data);
        //console.log(result);

        //服务器下发的id 是每个用户唯一的标识符
        //通过带id的找服务器要信息
        if (result.status == 200) {
            commit("USERLOGIN", result.data.id);
            //持久化存储id
            localStorage.setItem("ID", result.data.id);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //获取用户信息
    async getUserInfo({ commit }, data) {
        let result = await reqUserInfo(data);
        console.log(result);
        //提交用户信息
        if (result.status == 200) {
            commit("GETUSERINFO", result.data);
            //持久化存储用户名
            localStorage.setItem("USERNAME", result.data.username);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
        // commit("GETUSERINFO", result.data);

    },

    //退出登录
    async userLogout({ commit }) {
        let result = await reqLogout();
        //action里面不能操作state，需要提交mutation修改state
        if (result.status == 200) {
            commit("CLEAR");
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}