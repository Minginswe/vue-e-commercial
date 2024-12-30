//封装分类数据业务相关的代码
import {getCategoryAPI} from "@/apis/category.js"
import {useRoute} from "vue-router"
import {onBeforeRouteUpdate} from "vue-router"
import {onMounted ,ref} from "vue"



export function useCategory() {
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id) 
        categoryData.value =res.result
        // console.log('!!!!!', categoryData.value)
    }
    
    onMounted(() => getCategory())
    
    //目标：路由参数变化时 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
      console.log(to)
      //存在问题：使用最新路由参数请求最新的分类数据
      getCategory(to.params.id)
    })
    
    return {
        categoryData
    }
}