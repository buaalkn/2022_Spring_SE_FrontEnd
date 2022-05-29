//API统一管理
import requests from './request';

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone)=>requests({url:`http://127.0.0.1:4523/mock/1005801/api/user/passport/sendCode/${phone}`,method:'get'});

//获取租房数据 
//URL:/api/rentalList method:post 参数：需要
export const reqGetRentalInfo = (params)=>requests({url:"http://127.0.0.1:4523/mock/1005801/api/rentalList",method:'post',data:params});

//获取租房详细信息
//URL:/api/rentalDetail method:get 参数：需要
export const reqRentalDetail = (id)=>requests({url:`http://127.0.0.1:4523/mock/1005801/api/rentalDetails/${id}`,method:'get'});

//完成租房
//URL:/api/rentalDetail/complete method:post 参数：需要
export const completeRenting = (params)=>requests({url:"http://127.0.0.1:4523/mock/1005801/api/rentalDetail/complete",method:'post',data:params})