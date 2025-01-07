import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from "@/directives"


//测试接口函数
// import {getCategory} from '@/apis/testApi'
// getCategory().then(res => {
//     console.log(res)
// })

//引入全局组件插件
import { componentPlugin } from '@/components' 

const app = createApp(App)


const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


//定义全局指令
