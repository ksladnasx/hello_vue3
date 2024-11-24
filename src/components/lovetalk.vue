<template>
  <div class="talk">
    <button @click="getNewTalk">获取一个名言</button>
    <ul>
      <li v-for=" talk in lovetalkStore.talkList"  :key="talk.id">{{ talk.content }}</li>
    </ul>

  </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLovetalk } from '@/store/lovetalk';

//数据
let lovetalkStore = useLovetalk()
// 利用patch修改数据
lovetalkStore.$patch({
  name:"hauwei"
})

// let talkList = lovetalkStore.talkList

//请求方法
async function getNewTalk(){
  // 利用patch修改数据
  //请求,连续解构到content
   let {data }  = await axios.get("https://api.vvhan.com/api/ian/rand")
  
  console.log(data)
  //包装为对象
  let obj = {id : nanoid() , content : data}

  //添加到数组末尾
  lovetalkStore.talkList.unshift(obj)
}
</script>

<style scoped>
.talk{
    background-color: #e4b02d;
    padding: 10px;
    border-radius:10px ;
    box-shadow: 0 0 10px;
}

/* 并集选择器 */
select,button{
    margin: 0 50px;
    height: 25px;
}
</style>