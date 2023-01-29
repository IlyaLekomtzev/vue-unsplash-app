import { API_KEY, API_URL, AXIOS_PLUGIN_NAME } from '@/constants/defaults';
import axios from 'axios';
import type { App } from 'vue';

export default {
    install: (app: App) => {
        const plugin = axios.create({
            baseURL: API_URL,
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        });

        app.provide(AXIOS_PLUGIN_NAME, plugin);
    }
};
