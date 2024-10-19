<template>
  <div class="app">
    <!-- 最先渲染的 -->
   <h1>你好</h1> 
   <Person/>      
  </div>
 </template>

<script lang="ts" setup name ="App">
import Person from './components/Person.vue';  //引入组件
</script>



<style scoped>
  .aoo{
    background: hsl(60, 84%, 43%);
    box-shadow: 0,0,10px;
    border-radius: 20px;
    padding: 20px;

  }
</style>
