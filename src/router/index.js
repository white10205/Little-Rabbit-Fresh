import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component:()=> import ('@/views/Login/index.vue')
    },
    {
      path:'/',
      component:()=> import('@/views/Layout/index.vue'),
      children:[
        {
          path:'',
          component:()=> import('@/views/Home/index.vue')
        },
        {
          path:'category/:id',
          component:() => import('@/views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          component:() => import('@/views/SubCategory/index.vue')
        }
      ]
    }
  ],
  //路由行为的定制项
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
