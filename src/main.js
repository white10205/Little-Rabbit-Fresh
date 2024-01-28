import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
//引入懒加载插件
import { lazyPlugin } from '@/directives/index'
//引入初始化样式文件
import '@/styles/common.scss';

//引入全局组件
import {componentPlugin} from '@/components/index';

//导入持久化插件
const pinia = createPinia();
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


