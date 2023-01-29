import { AXIOS_PLUGIN_NAME } from '@/constants/defaults';
import type { ISearchUsers, IUser } from '@/types/api';
import type { AxiosInstance } from 'axios';
import { defineStore } from 'pinia';
import { inject, ref } from 'vue';

export const useUsersSearchStore = defineStore('users-search', () => {
    const axios = inject(AXIOS_PLUGIN_NAME) as AxiosInstance;

    const users = ref<IUser[]>([]);
    const isLoading = ref(false);

    const getUsers = async (query: string) => {
        try {
            isLoading.value = true;

            const { data } = await axios.get<ISearchUsers>('/search/users', {
                params: {
                    page: 1,
                    per_page: 50,
                    query
                }
            });

            users.value = data.results;
        } catch {
            users.value = [];
        } finally {
            isLoading.value = false;
        }
    };

    return { users, isLoading, getUsers };
});
