//API统一管理
import requests from './request';

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone)=>requests({url:`http://127.0.0.1:4523/mock/1005801/api/user/passport/sendCode/${phone}`,method:'get'});




//axios发请求返回结果是Promise对象