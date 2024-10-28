import {reactive,onMounted } from 'vue'
// npm i axios 安装axios 
import axios from 'axios';


// export default 默认暴露，后面直接跟上值，函数可以无名
export default function () {
    //数据
    let dogList = reactive([
        "https://images.dog.ceo/breeds/pembroke/n02113023_710.jpg"
    ])

    //方法
    // "https://dog.ceo/api/breed/pembroke/images/random"
    async function getDog() {
        // trycatch await请求方式 处理异常
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            //  console.log(result.data.message)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }

    }

    //钩子
    onMounted(()=>{
        alert("挂载完成！")
    })

    //向外界提供东西(数据，方法，盒或者其他)
    return {dogList,getDog}
}


