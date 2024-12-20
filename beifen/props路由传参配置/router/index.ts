//  创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router"
//引入可能要用的组件
import Home from "@/pages/Home.vue"
import News from "@/pages/News.vue"
import About from "@/pages/About.vue"
import Detail from "@/pages/Detail.vue"

//  想好路由器工作模式并创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:"zhuye", //命名路由，后期可以通过路由跳转
            path: "/home",
            component: Home
        },
        //定义子级嵌套路由
        {
            name:"xinwen",
            path: "/news",
            component: News,
            children:[
                {
                    // 传递参数需要路由里面提前占位
                    //:content?表示传的content可有可不有
                    path:"detail/:id/:title/:content?",
                    name:"xiang",
                    component:Detail,

                    // RouterLink如果是params,会自动帮你传好,只需要用defineProps在对应组件接收就行
                    props:true

                    // 如果是query就得写为函数式的
                    // props(route){
                    //     return route.query
                    // }

                    //对象写法也可以，但是写死了不会变
                }
            ]
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