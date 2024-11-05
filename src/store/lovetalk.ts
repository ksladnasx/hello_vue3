import { defineStore } from "pinia";
import { reactive } from "vue";

// 'lovetalk'为划分的分类
 export  const useLovetalk = defineStore('lovetalk',{
    //  真正存储数据的地方
    state(){
        return{
            talkList:[
                 {id:"jfdaosfesa1",content:"阿八八八"},
                {id:"jfdaosfesa2",content:"阿七七七"},
                {id:"jfdaosfesa3",content:"阿六六六"}
            ],
            name:"apple"
               
              
        }
    }
})