<template>
    <ul class="news-list">
      <li style="font-size: 10px;">编号：{{ id }}</li>
     <h1><li>标题：{{ title }}</li></h1> 
      <li>内容：{{ content }}</li>
    </ul>
  </template>
    
  <script setup lang="ts" name="About">
  //接收路由给你配置好的参数
  defineProps(['id','title','content'])
  </script>
  
  <style scoped>
    .news-list {
      list-style: none;
      padding-left: 20px;
      font-family: 'Times New Roman', Times, serif;
      font-size: 20px;
    }
  
    .news-list>li {
      line-height: 30px;
    }
  </style>