<template>
    <div class="app">
        
        <!-- 一般组件放components,路由组件放pages -->
        <Header></Header>
        <phones/>
        <br>
        <count/>
        <br>
        <lovetalk/>
        
    </div>
</template>

<script lang="ts" setup name="App" >
import axios from 'axios';
import count from './components/count.vue';
import Header from './components/Header.vue';
import lovetalk from './components/lovetalk.vue';
import phones from './components/phones.vue';

</script>


<style scoped>
</style>
