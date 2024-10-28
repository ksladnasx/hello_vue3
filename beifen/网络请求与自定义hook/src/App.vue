<template>
  <div class="app">
    <!-- 最先渲染的 -->
   <h1>你好</h1> 
   <!-- //ref获取，同名变量接收 -->
   <Person ref="per" v-if="isShow"/>  
   <!--  v-if根据指定值的真假来判断是否渲染该元素  -->
   <button @click="delper">点我卸载person的数据</button>
  
  </div>
 </template>

<script lang="ts" setup name ="App" >
import Person from './components/Person.vue';  //引入组件
import {ref} from 'vue'

let per = ref()
// console.log(per.value)

let isShow = ref(true)



function delper(){
   isShow.value = false
}
</script>



<style scoped>
  .aoo{
    background: hsl(60, 84%, 43%);
    box-shadow: 0,0,10px;
    border-radius: 20px;
    padding: 20px;

  }
</style>
