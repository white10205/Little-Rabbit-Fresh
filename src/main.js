import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'
//引入初始化样式文件
import '@/styles/common.scss';

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
    //el：指令绑定的元素
    //binding：表达式的值
    mounted(el,binding){
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if(isIntersecting){
                    //进入视口区域
                    el.src = binding.value
                }
            },
          )
    }
})
