//对axios进行二次封装
import store from "@/store";
import axios from "axios";

//1:利用axios对象的方法create，创造一个axios实例
//2:request就是axios，只是稍微配置一下
const request = axios.create({
    //配置对象
    //基础路径，比如http://xxx.xxx:8080/api，自动带上/api
    baseURL: "",
    timeout: 10000,
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.header.token = store.state.user.token;
    }
    return config;
})

//响应拦截器
request.interceptors.response.use((res) => {
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，做一些事情
    return res.data;
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})

//对外暴露
export default axios;