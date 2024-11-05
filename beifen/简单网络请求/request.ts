import axios from "axios"

// axios 请求
(async ()=>{
    const ins = axios.create({
        // 设置请求的基地址等参数
        baseURL:"http://localhost:5173"
    })
    
    //请求拦截器
    ins.interceptors.request.use(config =>{
        console.log("请求已经发出")
        return config
    })

    //响应拦截器
    ins.interceptors.response.use(res => {
        console.log("响应完成")
        return res 
    })

    const res1 = await ins.get('get',{
        //get请求传的参数
        params:{
            name:"xiaohan",
            age:18
        }
    })
    
    console.log(res1.status)

})()