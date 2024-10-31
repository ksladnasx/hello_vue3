<template>
  <div class="about">
   <h2 style="display: block;">欢迎来看狗</h2>
    <!--display: block使得按钮和h2这种行内元素成为块级元素从而实现换行  -->
 
   <button @click="movehome" >立即跳转</button>

  </div>
  <span>{{ time }}s后跳转主页......</span>
</template>

<script setup lang="ts" name="About">
import {  ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter() //直接拿到路由器，掌握所有路由标签
let time = ref(10);

const interval = setInterval(() => {
  time.value--
  if (time.value == 0) {
    router.push('/home')
    clearInterval(interval)
  }
}, 1000);

function movehome(){
  router.push('/home')
}
</script>

<style scoped>
@keyframes move {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(1240px, 0px);
  }

  50% {
    transform: translate(1240px, 200px);
  }

  75% {
    transform: translate(0, 200px);
  }

  100% {
    transform: translate(0, 0);
  }
}

div {
  width: 300px;
  border-radius: 3%;
  height: 100px;
  background-color: rgb(41, 217, 236);
  /* 引用的动画名称 */
  animation-name: move;
  /* animation-play-state:paused; */
  animation-play-state:running;
  /* 持续时间 */
  animation-duration: 10s;
  /* 重复次数   iteration:重复的 infinite：无限 */
  animation-iteration-count: infinite;
  /* 打开页面后的开始时间 */
  animation-delay: 1s;
  /* 是否反方向播放，默认是normal，如果想反方向就alternate */
  /* animation-direction: alternate; */
  /* 动画结束后的状态，默认是backward,回到起始状态，或者我们可以用 forwards让他停留在结束状态 */
  /* animation-fill-mode: forwards; */
  /* 以下定义运动方式，linear是匀速ease是先快后慢 */
  animation-timing-function: ease;
  /* 以下是两个之间的延迟 */

  /* 简化按以下格式 */
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}
div:hover{
            /* 这个控制动画的开始与停止 */
            /* animation-play-state:running; */
            animation-play-state:paused;
        }

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}

span {
  color: #2de2ec;
  ;
  border-left: 100px;
}
button{
  display: block;
  background: #fff;
    color: #666;
    max-width: 200px;
    /* margin-bottom: 20px; */
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
  
}
</style>