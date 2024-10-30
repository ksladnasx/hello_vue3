import { createApp } from 'vue'  //引入平台创建应用
import App from './App.vue'      //根组件
import router from './router'

//创建一个应用
const app = createApp(App)    
//使用路由器
app.use(router)

//挂载整个应用到app容器中
app.mount('#app') 