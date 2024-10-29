<template>
  <div class="news">
    <ul>
      <!-- 导航区 -->
      <li v-for="(news, index) in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!--:to表示后面的有关js语法的变量,记得有模板字符串   ?表示开始传参 &为分隔符-->
        <!-- <RouterLink :to="`/news/detail?id=${newsList[index].id}&title=${newsList[index].title}&content=${newsList[index].content}`">{{ index }}: {{ news.title }}</RouterLink> -->
         
        <!--第二种写法  -->
        <Router-link :to="{
          path:'/news/detail',
          query:{
            id:news.id,
            title:news.title,
            content:news.content,
          }
        }">
{{ news.title }}
        </Router-link>
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
const newsList = reactive([
  { id: "fjaioefjs01", title: "很好的抗癌食物", content: "新鲜的粮食、果蔬才是抗癌食品中的首选，具体包括：玉米、白薯、南瓜、苦瓜、麦麸、萝卜及胡萝卜、百合科蔬菜（葱、洋葱、蒜等）和十字花科蔬菜（元白菜、大白菜、白萝卜、芜菁、花椰菜、包心菜等）、蘑菇、芦笋、苦瓜、茄子和其他绿色蔬菜等，常吃的橘子、苹果、葡萄、香蕉、大枣、山楂、猕猴桃、樱桃、鲜桃、黄杏、草莓、紫皮葡萄、倭瓜和西瓜等新鲜水果，豆类及豆制品中所含的维生素、微量元素、生物碱及纤维素更不相同" },
  { id: "fjaioefjs02", title: "很好的壮阳食物", content: "能补肾壮阳的食物有很多，其中主要包括蔬菜类、肉类、海鲜类等。 1、蔬菜类： 生活中一些常见的蔬菜有补肾壮阳的作用，如木耳、韭菜、大葱、秋葵、山药、枸杞等； 2、肉类： 羊肉以及动物肾脏、肝脏等，中医上认为偏温热的食物可以达到补肾壮阳的作用； 3、海鲜类： 牡蛎、大虾、海参等，适用于偏阴虚的患者；" },
  { id: "fjaioefjs03", title: "很好的护眼食物", content: "明目护眼可以多吃富含叶黄素或花青素的蔬菜以及水果，蔬菜方面可以多吃胡萝卜、菠菜、南瓜、玉米等。 水果方面可以多吃蓝莓、葡萄、樱桃、桑葚这种颜色比较深的食物，也可以多吃枸杞，对眼睛比较好。 除了吃之外，还是要注意用眼习惯" },
  { id: "fjaioefjs04", title: "很好的益智食物", content: "花生含有丰富的卵磷脂和脑磷脂，它们是神经系统所需的重要物质，能够延缓大脑功能的衰退，抑制血小板凝集，防止脑血栓的形成。实验证明，经常食用花生可以改善血液循环、增强记忆能力、延缓衰老，是名副其实的“长生果”" },

])
</script>

<style scoped>
hr{
  padding: 2%;
  color: #1ec738;
}
.shownews{
  
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