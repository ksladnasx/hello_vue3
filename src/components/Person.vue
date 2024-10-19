<template>
    <div class="person">
        <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{temp}}℃</h2>
    <h2>当前水位：{{height}}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
    </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<script lang="ts" setup name="Person">
import {ref,watch,watchEffect} from 'vue'

  // 数据
  let temp = ref(10)
  let height = ref(0)

  // 方法
  function changeTemp(){
    temp.value += 10
  }
  function changeHeight(){
    height.value += 10
  }

  // 监视 -- watch实现
  /* watch([temp,height],(value)=>{
    // 从value中获取最新的水温(newTemp)、最新的水位(newHeight)
    let [newTemp,newHeight] = value
    // 逻辑
    if(newTemp >= 60 || newHeight >= 80){
      console.log('给服务器发请求')
    }
  }) */

  // 监视 -- watchEffect实现,全局监听
  watchEffect(()=>{
    if(temp.value >= 60 || height.value >= 80){
      console.log("请求发起")
      if(height.value >= 100 ){
        console.log("高度大于100了")
      }
    }
  })

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
