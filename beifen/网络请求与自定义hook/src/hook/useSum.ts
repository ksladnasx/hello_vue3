import { ref, reactive, computed } from 'vue'

export default function () {

    //数据
    let temps = ref(0)
    //计算属性
    let bigSum = computed(() => {
        return temps.value * 100
    })

    //方法
    function upper() {
        temps.value++
    }

    //返回的东西
    return { temps, bigSum,upper }

}


