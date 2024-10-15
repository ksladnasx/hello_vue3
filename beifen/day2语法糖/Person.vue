<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{a}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="addage">+1</button>
        <button @click="cutage">-1</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>-----------------

<!-- 命名可利用插件简化 -->
<!-- <script lang="ts">
export default {
    name: "Person",
    // setup() {
    //     //数据
    //     //此时的数据不是响应式的
    //     let name = "zhangsan"
    //     let age = 18
    //     let tel = "12345643243"

    //     //方法
    //     function changeName() {
    //         name = "zhang - san"
    //     }
    //     function addage() {
    //         age += 1
    //     }
    //     function cutage() {
    //         if (age < 1) {
    //             alert("太小了")
    //         } else {
    //             age -= 1
    //         }

    //     }
    //     function showTel() {
    //         alert(tel)
    //     }

    //     // return () => "哈哈哈"   //setup的返回值也可以是一个渲染函数
    //     return { name, age,changeName,cutage,showTel,addage}  //age :age将age值给age ，直接简写为age
    // }
}
</script> -->  

<!-- 语法糖，相当于自动返回的setup函数，
 lang="ts"：语言必须与之前script定义的一样 -->
<script lang="ts" setup name="Person234">
    
       //数据
        //此时的数据不是响应式的
        let name = "zhangsan"
        let age = 18
        let tel :number|string = "12345643243"
        let a :string = "贵州"

        //方法
        function changeName() {
            name = "zhang - san"
        }
        function addage() {
            age += 1
        }
        function cutage() {
            if (age < 1) {
                alert("太小了")
            } else {
                age -= 1
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
