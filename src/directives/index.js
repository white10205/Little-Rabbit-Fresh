//定义懒加载模块
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
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
    }
}