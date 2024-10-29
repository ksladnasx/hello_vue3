<template>
    <ul class="news-list">
      <li style="font-size: 10px;">编号：{{ query.id }}</li>
     <h1><li>标题：{{ query.title }}</li></h1> 
      <li>内容：{{ query.content }}</li>
    </ul>
  </template>
    
  <script setup lang="ts" name="About">

  import { toRefs } from 'vue';
import { useRoute } from 'vue-router';//就是一个自定义hook
  let route = useRoute()
  //解构会丢失数据的响应式，需要toRefs解救
  let {query} = toRefs(route)

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