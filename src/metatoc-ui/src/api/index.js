// 引入封装后的axios
import requests from './ajax';

// socail    接口demo
export const reqGetSearchInfo = () => {
    return requests({
        url: "https://v1.hitokoto.cn/?c=f&encode=text",
        method: "get",
        // data: params,
    })
}