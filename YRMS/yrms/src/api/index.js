//API统一管理
import requests from './request';

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone) => requests({ url: `http://127.0.0.1:4523/mock/1005801/api/user/passport/sendCode/${phone}`, method: 'get' });

//获取租房数据 
//URL:/api/rentalList method:post 参数：需要
export const reqGetRentalInfo = (params) => requests({
    url: "http://127.0.0.1:4523/mock/1005801/api/rentalList", method: 'post', data: params, headers: {
        'Content-Type': 'multipart/form-data'
    }
});

//注册
//URL:/api/user/passport/register method:post	 phone code password
export const reqUserRegister = (data) => requests({ url: 'http://127.0.0.1:4523/mock/1005801/user/passport/register', data, method: 'post' });

//登录
//URL:/api/user/passport/login method:post	 phone password
export const reqUserLogin = (data) => requests({ url: 'http://127.0.0.1:4523/mock/1005801/user/passport/login', data, method: 'post' });

//验证码登录
//URL:/api/user/passport/loginvf method:post	 phone code
export const reqUserLoginWithVfCode = (data) => requests({ url: 'http://127.0.0.1:4523/mock/1005801/user/passport/loginvf', data, method: 'post' });

//获取租房详细信息
//URL:/api/rentalDetail/{id} method:get 参数：需要
export const reqRentalDetail = (id) => requests({ url: `http://127.0.0.1:4523/mock/1005801/api/rentalDetails/${id}`, method: 'get' });

//完成租房
//URL:/api/rentalDetail/complete method:post 参数：需要
export const completeRenting = (params) => requests({
    url: "http://127.0.0.1:4523/mock/1005801/api/rentalDetail/complete", method: 'post', data: params,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

//首页租房推荐
//URL:/api/recommendation method:get 参数：不需要
export const reqRecommend = () => requests.get("http://127.0.0.1:4523/mock/1005801/api/recommendation");

//获取订单列表
//URL:/api/user/order/{id} method:get 参数：需要
export const reqGetOrderInfo = (id) => requests({ url: `http://127.0.0.1:4523/mock/1005801/api/user/order/${id}`, method: 'get' });

//添加租房
//URL:/api/room/add_room method:post 参数：需要
export const completeAddRental = (params) => requests({
    url: "http://127.0.0.1:4523/mock/1005801/api/room/add_room", method: 'post', data: params,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

//获取订单详细信息
//URL:/api/user/orderDetail/{id} method:get 参数：需要
export const reqOrderDetail = (id) => requests({ url: `http://127.0.0.1:4523/mock/1005801/api/user/orderDetail/${id}`, method: 'get' });

//删除当前订单
//URL:/api/user/deleteOrder method:post 参数：需要
export const deleteOrder = (params) => requests({
    url: 'http://127.0.0.1:4523/mock/1005801/api/user/deleteOrder', method: 'post', data: params,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

//续约长租订单
//URL:/api/user/deleteOrder method:post 参数：需要
export const continueOrder = (params) => requests({
    url: 'http://127.0.0.1:4523/mock/1005801/api/user/continueOrder', method: 'post', data: params,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

//报修投诉
//URL:/api/user/complaint method:post 参数：需要
export const complaint = (params) => requests({
    url: 'http://127.0.0.1:4523/mock/1005801/api/user/complaint', method: 'post', data: params,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})