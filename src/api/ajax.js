// axios二次封装
import axios from 'axios';

let baseURL = ''
if (true || import.meta.env.MODE == 'dev') {
    baseURL = '/api'
} else {
    baseURL = import.meta.env.VITE_WEBSERVICE_HOST
}

const requests = axios.create({
    // 配置对象
    // 基础路径（服务器路径都有/api，加上之后不用每次都输入）
    baseURL: baseURL,
    // 请求超时的时间（毫秒）
    timeout: 5000,
});

// 请求拦截器 ：发送之前检测到，以便于处理一些业务
requests.interceptors.request.use((config) => {
    // config是配置对象，对象中有个属性很重要：header请求头
    // 携带token向服务器索取数据
    return config;
});

// 响应拦截器 ：服务器发送数据后，响应拦截器可处理一些业务
requests.interceptors.response.use(
    (res) => {
        // 响应成功的回调函数
        return res;
    },
    (error) => {
        // 响应失败的回调函数
        return Promise.reject(new Error('faile'));
    }
);

// 暴露
export default requests;