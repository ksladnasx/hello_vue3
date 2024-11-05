<template>

    <!-- 只能用v-if ，不能用v-show，否则 -->
    <div v-if="flag">
        <section>

            <!-- 背景颜色 -->
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div class="box">
                <!-- 背景圆 -->
                <div class="circle" style="--x:0"></div>
                <div class="circle" style="--x:1"></div>
                <div class="circle" style="--x:2"></div>
                <div class="circle" style="--x:3"></div>
                <div class="circle" style="--x:4"></div>
                <!-- 登录框 -->
                <div class="container">
                    <div class="form">
                        <h2>登 录</h2>
                        <form>
                            <div class="inputBox">
                                <input type="text" placeholder="姓名" autocomplete="off" v-model="account">

                            </div>
                            <div class="inputBox">
                                <input type="password" placeholder="密码" autocomplete="off" v-model="password">

                            </div>
                            <div class="inputBox">
                                <!-- <button @click="toApp" >分隔符的</button> -->
                                <input type="submit" @click="toApp()" value="登录" autocomplete="off">

                            </div>
                            <p class="forget">忘记密码?<a href="#">
                                    点击这里
                                </a></p>
                            <p class="forget">没有账户?<a href="#">
                                    注册
                                </a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <Router-view></Router-view>
</template>

<script lang="ts" setup name="App">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '@/css/dl.css'
import { accountList } from './data/accountList';
import  '@/request'
let password: number
let account: string


const router = useRouter()
let flag = ref(true)
function toApp() {
    if (password == undefined) {
        alert("请输入密码！")
        return
    }
    if (account == undefined) {
        alert("请输入账号！")
        return
    }
    for (let i = 0; i < accountList.length; i++) {
        if (account == accountList[i].account && password == accountList[i].password) {
            flag.value = false
            router.push('/app')
            alert("登录成功！")
            break
        }
        if (i == accountList.length - 1) {
            alert("用户不存在！")
            return
        }
    }








}
// onMounted(()=>{
//     alert("请先登录！")
// })
</script>


<style scoped></style>
