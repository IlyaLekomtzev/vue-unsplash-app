<template>
    <div class="container">
        <div v-if="userStore.isLoading" class="center-wrapper">Loading..</div>

        <div v-else-if="userStore.user" class="user-page">
            <AccountInfo :data="userStore.user" />
            <UserPhotos :username="userStore.user.username" />
        </div>

        <div v-else class="center-wrapper">Not data</div>
    </div>
</template>

<script setup lang="ts">
import AccountInfo from '@/components/user/AccountInfo.vue';
import UserPhotos from '@/components/user/UserPhotos.vue';
import { useUserStore } from '@/stores/user';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();

onMounted(() => {
    const username = route.params.username;
    if (username && typeof username === 'string') {
        userStore.getUser(username);
    }
});

watch(
    () => route.params.username,
    username => {
        if (username && typeof username === 'string') {
            userStore.getUser(username);
        }
    }
);
</script>

<style scoped lang="scss">
.user-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 30px 0;
}
</style>
