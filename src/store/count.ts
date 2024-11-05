import { defineStore } from "pinia";
import { ref } from "vue";

 export  const useCountStore = defineStore('count',{
    //与数据相关的修改方法，避免不同文件复用函数
    actions:{
        increament(value:number){
            if(this.sum > 100){
                alert("别nm加了")
            }
            this.sum+=value
        }

    },
    //  真正存储数据的地方
    state(){
        return{
            sum:ref(6)
        }
    }
})