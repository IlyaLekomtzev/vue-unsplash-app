import '@/assets/main.css';
import 'normalize.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import axios from './plugins/axios';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(axios);

app.mount('#app');
