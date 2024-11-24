<template>
  <div class="count">
    <h2>当前求和为{{ sum}}</h2>
    <!-- 将收集到的东西转成number而不是字符串 -->
    <select v-model.number="n">  
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option> 
    </select>
    <input type="text" v-model.number="m">
    <button @click="add">加 </button>
    <button @click="minus">减</button>
    <span>powered by {{ school}}</span>
  </div>
</template>

<script setup lang='ts' >
import {  ref, toRef } from 'vue';
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia';
import { watch } from 'fs';
const countStore = useCountStore()

// let sum =computed(()=>countStore.sum)//注意这样额外定义之后无法改sum，因为是计算属性，
// 但如果直接定义sum是countStore.sum的话又会因为传参使得数据丢失响应式
// 最好的方法就是直接countStore.sum
//useCountStore()返回的是一个reactive对象，已经把包装的ref数据自动解包了就不需要.value了

//或者 借助`storeToRefs`将`store`中的数据转为`ref`对象，方便在模板中使用。
// `pinia`提供的`storeToRefs`只会将数据做转换，而`Vue`的`toRefs`会转换`store`中数据

let {sum,school,bigSum,upperSchool} = storeToRefs(countStore)
// let bigsum =  bigSum.value //这个就是经过bigSum处理之后的数据

let n = ref(1)    //用户选择 
let m = ref(1)

function add(){
    // 直接调用countStore内置的方法修改数据
    countStore.increament(m.value)

}

function minus(){
    
    countStore.sum -= n.value
    
}

</script>

<style scoped>
span{
    padding-left: 88px;
    font-size: 12px;
}
option,button{
    background: #06ac64;
    width: 30px ;
    border-radius: 30%;
    
}
select{
    background-color: #2dd2e4;
    border-color: #6de42d;

}
.count{
    background-color: #2dd2e4;
    padding: 10px;
    border-radius:10px ;
    border: solid;
    box-shadow: 0 0 10px;
}

/* 并集选择器 */
select,button{
    margin: 0 50px;
    height: 25px;
}
</style>