<template>
    <div class="longin">
        <button @click="toApp" v-show="flag">点我跳转</button>
        <Routerlink to='/app'></Routerlink>
    </div>
    <Router-view ></Router-view>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
let flag = ref(true)
function toApp(){
    flag.value = false
    router.push('/app')
    alert("跳转成功！")
}
onMounted(()=>{
    alert("请先登录！")
})
</script>


<style scoped>

</style>
