<script setup>
import LayoutNav from "./components/LayoutNav.vue"
import LayoutHeader from "./components/LayoutHeader.vue"
import LayoutFooter from "./components/LayoutFooter.vue"
</script>


<template>
    <div>
        <!-- 二级路由的出口 -->
        <LayoutNav />
        <LayoutHeader />
        <RouterView/>
        <LayoutFooter />
    </div>
</template>