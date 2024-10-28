<template>
  <div class="person">
    <h2>当前和为{{ temps }}</h2>
    <h5>放大后{{ bigSum }}</h5>
    <button @click="upper">+1</button>
    <!-- <hr>  是分割线 -->
    <hr style="color: crimson;">
    <img id="imgs" v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只</button>
  </div>
</template>-----------------
<!-- http://localhost:5173/ -->

<script lang="ts" setup name="Person">
//引入你自定义的hook
import useDog from '@/hook/useDog';
import useSum from '@/hook/useSum';

//解构返回的东西(hook本质就是函数返回值)
const { dogList, getDog } = useDog()
const { temps,bigSum, upper } = useSum()
</script>
<!--  scoped使得是局部样式 -->
<style scoped>
#table :hover {
  background-color: #cacbca;
}

table {
  border: 1px solid;
  border-color: #e0d4d4
}

th {
  border: 1px solid;
  border-radius: 20%;
  border-color: #d99494
}

td {
  border: 1px solid;
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

img {
  height: 100px;
  /* 设定右间距 */
  margin-right: 10px;
}
</style>
