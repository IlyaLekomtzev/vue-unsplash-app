import { AXIOS_PLUGIN_NAME } from '@/constants/defaults';
import type { IPhoto } from '@/types/api';
import type { AxiosInstance } from 'axios';
import { defineStore } from 'pinia';
import { inject, ref } from 'vue';

export const useFeedStore = defineStore('feed', () => {
    const axios = inject(AXIOS_PLUGIN_NAME) as AxiosInstance;

    const page = ref(1);
    const feed = ref<IPhoto[]>([]);
    const isLoading = ref(false);
    const isLoadedFirstPage = ref(false);
    const hasNext = ref(true);

    const getFeed = async () => {
        try {
            if (isLoadedFirstPage.value) {
                page.value += 1;
            }

            isLoading.value = true;

            const { data } = await axios.get<IPhoto[]>('/photos', {
                params: {
                    page: page.value,
                    per_page: 20
                }
            });

            if (!data || data.length === 0) {
                hasNext.value = false;
            } else {
                feed.value = [...feed.value, ...data];
            }

            if (!isLoadedFirstPage.value) {
                isLoadedFirstPage.value = true;
            }
        } catch {
            feed.value = [];
            hasNext.value = false;
            isLoadedFirstPage.value = true;
        } finally {
            isLoading.value = false;
        }
    };

    return { feed, isLoading, hasNext, isLoadedFirstPage, getFeed };
});
