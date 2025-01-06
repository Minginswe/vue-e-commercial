//axios的基础封装
import axios from 'axios'

import {ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css' 

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net' ,
    timeout:5000
})


//请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(
    res => {
        return res.data
    },
    e => {
        //同意错误提示
        ElMessage({
            type: 'warning',
            message:e.response.data.message
        })
        return Promise.reject(e)
    }
)
export default httpInstance