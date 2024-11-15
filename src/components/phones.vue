<template>
  <div class="phone">
    <input type="text" v-model.number="phonenum">
      <button @click="getInfo">查询</button>
      <div>电话号码：{{ phonenum }}</div>
      <div>运营商：{{ op }}</div>
      <div>归属地：{{province}}省{{city}}市</div>
      <div>邮编码：{{zipcode  }}</div>
      <div>地区码：{{ areacode }}</div>
  </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { ref, toRefs, watch, watchEffect } from 'vue';

let phonenum  = ref(0)
let op = ref("未知")
let province = ref("未知")
let city = ref("未知")
let zipcode = ref("未知")
let areacode = ref("未知")

//请求
async function getInfo() {
  try {
            
            let result = await axios.get(`https://api.vvhan.com/api/phone/${phonenum.value}`)
            op.value = result.data.info.op 
            province.value = result.data.info.province
            city.value = result.data.info.city
            zipcode.value = result.data.info.zipcode
            areacode.value = result.data.info.areacode
          // let {success: {},phone: {},info:{op,province,city,zipcode,areacode}} = result.data
          //    console.log(op)
        } catch (error) {
            alert("请输入正确的手机号！")
          
        }

}
// watch(()=>phonenum.value,(newValue,oldValue)=>{
//       if(newValue != oldValue){
//         getInfo()
//       }
// })
</script>

<style scoped>

</style>