import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "/",
    // 超时
    timeout: 10000
})
// 响应拦截器
service.interceptors.response.use(res => {
        return res.data
    },
    error => {
        console.log('err' + error);
        return Promise.reject(error)
    }
)
export default service
