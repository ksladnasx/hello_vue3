<template>
    <div class="app">
        <!-- 一般组件放components,路由组件放pages -->
        <Header></Header>
        <!-- 导航区 -->
        <div class="navigate">

            <RouterLink :to="{path:'/home'}" active-class="active">首页</RouterLink>
          
            <RouterLink to="/news" active-class="active">新闻</RouterLink>

            <!-- 默认是push模式，加上replace改为replace模式（类似无痕浏览无法退回上一个页面） -->
            <RouterLink replace to="/about" active-class="active">关于</RouterLink>
        </div>

        <!-- 展示区 -->
        <div class="main-content">

            <Router-view></Router-view>

        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter() //直接拿到路由器，掌握所有路由标签

onMounted(()=>{
    // 挂载完成0.003后自动跳转到home页面（push模式跳转）
    setTimeout(() => {
        router.push('/home')
    }, 3);
})
</script>


<style scoped>
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}

.navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
}

.main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
</style>
