//API统一管理
import requests from './request';

//获取验证码
//URL:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone)=>requests({url:`http://127.0.0.1:4523/mock/1005801/api/user/passport/sendCode/${phone}`,method:'get'});

//获取租房数据 
//URL:/api/rentalList method:post 参数：需要
/*
{

}
*/
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetRentalInfo = (params)=>requests({url:"http://127.0.0.1:4523/mock/1005801/api/rentalList",method:'post',data:params});