//  创建一个路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router"
//引入可能要用的组件
import Home from "@/pages/Home.vue"
import News from "@/pages/News.vue"
import About from "@/pages/About.vue"
import Detail from "@/pages/Detail.vue"
import App from "@/App.vue"
import Login from "@/Login.vue"

//  想好路由器工作模式并创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:"app",
            path:"/app",
            component:App,
            //全是App的子组件
            children:[
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
        
                            props:true
        
                        }
                    ]
                },
                {
                    name:"guanyu",
                    path: "/about",
                    component: About
                }
            ]
        },
        

    ]
})

//暴露路由
export default router