<template>
    <div class="about">
      <h2>欢迎来看狗</h2>

      <h5>{{time}}s后跳转主页......</h5>
    </div>
  </template>
  
  <script setup lang="ts" name="About">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

  
const router = useRouter() //直接拿到路由器，掌握所有路由标签
let time = ref(3);
onMounted(()=>{
    // 该组件挂载完成3后自动跳转到home页面（push模式跳转）
    
    setTimeout(() => {
      time.value = time.value-1;
    }, 1000);
    
    
    // if(time.value == 3){
    //   router.push('/home')
    // }
    
  
})
  </script>
  
  <style scoped>
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
  </style>