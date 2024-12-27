import httpInstance from "@/utils/http"

//获取banner
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

export const findHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}