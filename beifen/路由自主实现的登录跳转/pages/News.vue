<template>
  <div class="news">
    <ul>
      <!-- 导航区 -->
      <li v-for="(news, index) in newsList" :key="news.id">
         
        {{index}}. 
        <!--第二种写法  -->
        <RouterLink :to="{
          name:'xiang',
          //传参到路由，经过路由传递到对应组件
           params:{ 
            id:news.id, 
            title:news.title, 
            content:news.content 
          } 
           }">
          {{ news.title }}<button @click="getnews(news)" style="margin-left: 20px;">详情</button>
        </RouterLink>
      </li>
    </ul>
    <!-- <hr> -->
    <!-- 展示区 -->
    <div class="shownews">
      <Router-view></Router-view>
    </div>

  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
//引入泛型接口
import type newsInter from '@/interface/newsInter';
import router from '@/router';
//引入数据,引入了就直接用
import { newsList } from '@/data/newsList';

function getnews(news:newsInter){
     router.push({
      //写法跟to一样的
      name:'xiang',
          //传参到路由，经过路由传递到对应组件
           params:{ 
            id:news.id, 
            title:news.title, 
            content:news.content 
          }
     })
}


</script>

<style scoped>
hr {
  padding: 2%;
  color: #1ec738;
}

.shownews {

  display: flexbox;
  width: 80%;
  /* padding-right: 300px; */
  border: #64967E solid;
  border-radius: 3%;
}

/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>