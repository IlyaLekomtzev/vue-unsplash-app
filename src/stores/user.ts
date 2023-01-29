import { AXIOS_PLUGIN_NAME } from '@/constants/defaults';
import type { IPhoto, IUser } from '@/types/api';
import type { AxiosInstance } from 'axios';
import { defineStore } from 'pinia';
import { inject, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const axios = inject(AXIOS_PLUGIN_NAME) as AxiosInstance;

    const user = ref<IUser | null>(null);
    const isLoading = ref(false);

    const getUser = async (username: string) => {
        try {
            isLoading.value = true;

            const { data } = await axios.get<IUser>(`/users/${username}`);

            user.value = data;
        } catch {
            user.value = null;
        } finally {
            isLoading.value = false;
        }
    };

    return { user, isLoading, getUser };
});

export const useUserPhotosStore = defineStore('user-photos', () => {
    const axios = inject(AXIOS_PLUGIN_NAME) as AxiosInstance;

    const photos = ref<IPhoto[]>([]);
    const isLoading = ref(false);

    const getPhotos = async (username: string) => {
        try {
            isLoading.value = true;

            const { data } = await axios.get<IPhoto[]>(`/users/${username}/photos`, {
                params: {
                    page: 1,
                    per_page: 30
                }
            });

            photos.value = data;
        } catch {
            photos.value = [];
        } finally {
            isLoading.value = false;
        }
    };

    return { photos, isLoading, getPhotos };
});
