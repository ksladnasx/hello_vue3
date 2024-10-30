import { createApp } from 'vue'  //引入平台创建应用
import App from './App.vue'      //根组件
import router from './router'
import About from './pages/About.vue'
import Login from './Login.vue'

//创建一个应用，以登录页面为初始页面
const app = createApp(Login)    
//使用路由器
app.use(router)

//挂载整个应用到app容器中
app.mount('#app') 