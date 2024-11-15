<template>

    <div class="home">

        <img id="imgs" :src=dogList > 


    </div>
    <button @click="getDog">再来一只</button>
</template>

<script setup lang="ts" name="Home">
import useDog from '@/hook/useDog';

const { dogList, getDog } = useDog()

</script>

<style scoped>
button :hover {
    color: aqua;
}

img {
    max-height: 100%;

}

.home {
    /* 让容器内容居中 */
    text-align: center;
    display: inline-flexbox;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>