import { createApp } from 'vue'  //引入平台创建应用
import App from './App.vue'      //根组件
//引入pinia
import { createPinia } from 'pinia'


//先创建一个应用
const app = createApp(App)    
//再创建pinia
const pinia = createPinia()
//安装pinia
app.use(pinia )
//挂载整个应用到app容器中
app.mount('#app') 