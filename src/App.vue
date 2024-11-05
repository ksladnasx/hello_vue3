<template>
    <div class="app">
        
        <!-- 一般组件放components,路由组件放pages -->
        <Header></Header> 
        <count/>
        <br>
        <Lovetalk/>

    </div>
</template>

<script lang="ts" setup name="App">
import count from './components/count.vue';
import Header from './components/Header.vue';
import Lovetalk from './components/lovetalk.vue';

</script>


<style scoped>
</style>
