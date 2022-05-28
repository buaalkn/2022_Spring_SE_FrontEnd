//API统一管理
import requests from './request';

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone) => requests({ url: `http://127.0.0.1:4523/mock/1005801/api/user/passport/sendCode/${phone}`, method: 'get' });

//注册
//URL:/api/user/passport/register method:post	 phone code password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

//登录
//URL:/api/user/passport/login method:post	 phone password
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

//验证码登录
//URL:/api/user/passport/loginvf method:post	 phone code
export const reqUserLoginWithVfCode = (data) => requests({ url: '/user/passport/loginvf', data, method: 'post' });


//axios发请求返回结果是Promise对象