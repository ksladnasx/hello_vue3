<template>
  <div class="person">
    <h2 ref="temps">需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
    <ul> 
      <li v-for="item in persons">
            {{ item.id }}---{{ item.name }}-------{{ item.age }}
      </li>
    </ul>
    <table id="table" >
      <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>age</th>
    </tr>
     <tr v-for="item in persons">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.school }}</td>
     </tr>
    
    </table>
    
  </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<script lang="ts" setup name="Person">
import { ref, watch, watchEffect,onMounted,onBeforeMount, onUpdated, onBeforeUpdate, onBeforeUnmount, onUnmounted } from 'vue'
import { type person } from '../types'


let p: person = {
  id: "djafka01",
  name: "张三",
  age: 222
}
//泛型
let persons: Array<person> = [
  {
    id: "djafka01",
    name: "张三",
    age: 222
  },
  {
    id: "djafka02",
    name: "李三",
    age: 23,
    school: "重邮"
  },
  {
    id: "djafka01",
    name: "刘三",
    age: 2,
    school: "重大"
  }
]
let temps = ref(34)
// 数据
let temp = ref(10)
let height = ref(0)
// console.log(temps.value)直接打印不行因为组件没加载渲染完

//defineExpose定义能暴露给其他组件的数据
defineExpose({ temp })

// 方法
onBeforeMount(()=> {
  alert("开始挂载")
})

onMounted(()=> {
  alert("挂载完成")
})

onBeforeUpdate(()=>{
  alert("更新前")
})
  
onUpdated(()=>{
  alert("更新完成")
})

onBeforeUnmount(()=>{
  alert("卸载前")
})

onUnmounted(()=>{
  alert("卸载完成")
})

function changeTemp() {
  temp.value += 10

  console.log("dd ")
  console.log(temps.value)
}
function changeHeight() {
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
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log("请求发起")
    if (height.value >= 100) {
      console.log("高度大于100了")
    }
  }
})

</script>
<!--  scoped使得是局部样式 -->
<style scoped>

#table :hover{
  background-color: #cacbca;
}
table{
  border: 1px solid ;
  border-color: #e0d4d4
}
th{
  border: 1px solid ;
  border-radius: 20%;
  border-color: #d99494
}
td{
  border: 1px solid ;
  border-radius: 20%;
  border-color: #96a51fce
}
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
