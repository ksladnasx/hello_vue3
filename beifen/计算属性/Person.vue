<template>
  <div class = "person">
    <!-- br标签是换行 -->
     <!-- v-model用于数据双向绑定，更改输入框内容则绑定的变量的值也跟着改 -->
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>  
    <button @click="changefullname">改名字  </button>
    全名：<span>{{ fullname }}</span><br> 
    <!-- 这之后的fullname就再调用计算，因为没变，直接用缓存 -->
    全名：<span>{{ fullname }}</span><br> 
    全名：<span>{{ fullname }}</span><br> 
    全名：<span>{{ fullname }}</span><br> 
    全名：<span>{{ fullname }}</span><br> 
    全名：<span>{{ fullname }}</span>
  </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<script lang="ts" setup name="Person">
import {computed, ref} from 'vue';

let firstname = ref ("张")
let lastname = ref("三")

//计算属性,是只读的属性，要get和set来
let fullname = computed({
    // console.log("调用一次之后就用不再重复"),
    get(){
        //slice是截取，slice(0,1)是截取字符串第0个字符然后toUpperCase（变大写）再拼接从1开始到结尾的字符（value.slice(1)）
    return firstname.value.slice(0,1).toUpperCase()+firstname.value.slice(1)+"-"+lastname.value
    },
    
    //赋值会调用fullname的set方法，将li-si作为val传入
    set (val ) {
        //数组解构赋值
        const [str1,str2] = val.split("-")

        //既然fullname只能只读，那就改firstname和lastname
        firstname.value = str1
        lastname.value = str2
        console.log(val);
    }
    
    
})

//方法修改全名

function changefullname(){
    fullname.value = "li-si"//赋值会调用fullname的set方法，将其作为val传入
}
</script>

<style scoped>
.person {
    background: skyblue;
    box-shadow: 0, 0, 10px;
    border-radius: 20px;
    padding: 20px;
    width: 440px;

}

button {
    margin: 0 5px;
    color: #1d35a0;
    border-radius: 6px
}

button:hover {
    background-color: rgb(229, 241, 2);
    color: red;
    box-shadow: 0, 0, 3px
}

;
</style>
