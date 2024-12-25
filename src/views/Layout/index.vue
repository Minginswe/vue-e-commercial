<script setup>
import LayoutNav from "./components/LayoutNav.vue"
import LayoutHeader from "./components/LayoutHeader.vue"
import LayoutFooter from "./components/LayoutFooter.vue"
import LayoutFixed from "./components/LayoutFixed.vue"
// 出发导航列表的action
import {useCategoryStore} from "@/stores/category.js"
import {onMounted} from "vue"

const categoryStore = useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>


<template>
    <div>
        <!-- 二级路由的出口 -->
        <LayoutFixed /> 
        <LayoutNav />
        <LayoutHeader />
        <RouterView/>
        <LayoutFooter />
    </div>
</template>