<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ a }}</h2>
        <h3>车名：{{ car.brand }}</h3>
        <h4>价格：{{ car.price }}万</h4>
        <button @click="changeName">修改名字</button>
        <button @click="addage">+1</button>
        <button @click="cutage">-1</button>
        <button @click="showTel">查看联系方式</button>
        <button @click="upperprice">提高价格并改名</button>

        <ul>
            <!--  :key 中的冒号意思是将key 里面的内容当js代码-->
            <li @click="upperprice" v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
    </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<script lang="ts" setup name="Person">

import { ref } from "vue"
//数据,
//ref创建基本类型响应数据对象，利用name.valu改数据

//想要数据是响应式的,要用ref包一下
let name = ref("zhangs")  //这就是一个实例对象
let age = ref(18)
let tel: number | string = "12345643243"
let a: string = "贵州"

//reactive创建对象类型的响应数据，是深层次的 
import { reactive } from "vue";

let car = reactive({ brand: "bendci", price: 200 })
let games = reactive([
    { id: "iadffasfda1", name: "王者荣耀" },
    { id: "iadffasfda2", name: "王" },
    { id: "iadffasfda3", name: "者" }
])
//方法
function upperprice() {
    car.price += 10
    for (let i = 0; i <= 10; i++) {
        games[i].name = "原神"
    }

}
//方法
function changeName() {
    name.value = "zhang - san"
}
function addage() {
    age.value += 1
}
function cutage() {
    if (age.value < 1) {
        alert("太小了")
    } else {
        age.value -= 1
    }

}
function showTel() {
    alert(tel)
}
</script>

<style scoped>
.person {
    background: skyblue;
    box-shadow: 0, 0, 10px;
    border-radius: 20px;
    padding: 20px;

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
