import XtxSku from '@/components/XtxSku/index.vue'
import imgView from '@/components/imgView/index.vue'
export const componentPlugin = {
    install(app){
        app.component('XtxSku',XtxSku)
        app.component('imgView',imgView)
    }
}