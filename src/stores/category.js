import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/Layout';

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.data.result
        console.log(categoryList.value);
    }
    return {
        getCategory,
        categoryList
    }
})
