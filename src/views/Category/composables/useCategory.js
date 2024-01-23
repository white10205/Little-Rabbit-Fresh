// 封装分类数据业务相关代码
import { ref ,watch} from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute , useRouter} from 'vue-router'

export function useCategory() {
    // 获取分类数据
    const categoryData = ref({});
    const route = useRoute();
    const router = useRouter();
    const getCategory = async () => {
        const res = await getCategoryAPI(route.params.id);
        categoryData.value = res.data.result;
    };
    watch(
        () => router.currentRoute.value.path,
        () => {
            getCategory();
        },
        { immediate: true }
    );
    return {
        categoryData
    }
}