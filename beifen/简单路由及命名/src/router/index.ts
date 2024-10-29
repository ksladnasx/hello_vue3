//  创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router"
//引入可能要用的组件
import Home from "@/pages/Home.vue"
import News from "@/pages/News.vue"
import About from "@/pages/About.vue"

//  想好路由器工作模式并创建路由器
const router = createRouter({
    //先定义路由工作模式
    history: createWebHistory(),
    //数组里面定义路由地址与对应组件（一个个的路由规则）
    routes: [
        {
            name:"zhuye", //命名路由，后期可以通过路由跳转
            path: "/home",
            component: Home
        },
        {
            name:"xinwen",
            path: "/news",
            component: News
        },
        {
            name:"guanyu",
            path: "/about",
            component: About
        }

    ]
})

//暴露路由
export default router