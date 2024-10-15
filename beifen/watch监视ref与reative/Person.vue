<template>
  <div class = "person">
    <!-- br标签是换行 -->
     <!-- v-model用于数据双向绑定，更改输入框内容则绑定的变量的值也跟着改 -->
      <h2>情况1:监视【ref】定义的基本类型数据</h2>
     <button @click="lowsum">-</button>
     <span>{{ sum }}</span>
     <button @click="upsum">+</button><br>
     <h2>情况2:监视【ref】定义的对象数据类型</h2>
     <p>名字：{{ person.name }}</p>
     <p>年龄：{{ person.age }}</p>
     <button @click="changename">改名字</button>
     <button @click="changeage">改年龄</button>
     <button @click="changePerson">改人</button>
 </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<script lang="ts" setup name="Person">
import {computed, ref, watch} from 'vue';
let sum = ref(0)

let person = ref({
    name:"张三",
    age:22
})
//方法
function upsum(){
    sum.value += 1
}
function lowsum(){
    sum.value -= 1
}
function changename(){
    person.value.name += "~"
}
function changeage(){
    person.value.age += 1
}
function changePerson(){
    person.value = {name:"李四",age:20}
}
//监视sum,其中newValue新的值,旧的值是oldValue
const stopwatch = watch(sum,(newValue,oldValue) =>{
    //监视sum定义的数据，如果小于0就保持0
    if(sum.value<0){
        sum.value = 0
        
    }else{
        console.log("sum值变化了",newValue,oldValue)
    }
    if(sum.value>10){
        stopwatch()  //这里调用你为watch定义的变量来停止监视
    }
})

//监视对象
watch(person,(newValue,oldValue)=>{
  console.log("变化了",newValue,oldValue)
  if(oldValue.name.slice(0,2) == "李四" ){
    person.value.name = "张三" 
    person.value.age = 22//实现来回切换
  }
},{deep:true})//第三个参数是配置对象，这里配置deep打开深度监听  


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
