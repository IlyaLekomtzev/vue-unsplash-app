<template>
    <div class="feed-item">
        <div>
            <RouterLink :to="`${AppRoute.User}/${user.username}`" class="feed-item__user user">
                <div class="user__avatar">
                    <img :src="user.avatarSrc" alt="Avatar" class="user__avatar-image" />
                </div>
                <div class="user__name">@{{ user.username }}</div>
            </RouterLink>
        </div>

        <img class="feed-item__image" :src="imageSrc" :alt="`Photo by ${user.username}`" />

        <div v-if="!!description" class="feed-item__description">
            {{ description }}
        </div>

        <div class="feed-item__likes">Likes: {{ likes }}</div>
    </div>
</template>

<script setup lang="ts">
import { AppRoute } from '@/router';
import { RouterLink } from 'vue-router';

interface Props {
    user: {
        id: string;
        username: string;
        avatarSrc: string;
    };
    description: string | null;
    likes: number;
    imageSrc: string;
}

const { user, description, likes, imageSrc } = defineProps<Props>();
</script>

<style scoped lang="scss">
.feed-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--grey-light-color);

    &__image {
        display: block;
        width: 100%;
        border-radius: 20px;
    }

    &__description {
        font-size: 14px;
        font-weight: 300;
        line-height: 150%;
        color: var(--black-color);
    }

    &__likes {
        font-weight: 700;
        font-size: 12px;
        color: var(--primary-color);
    }
}

.user {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;

    &__avatar {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        border-radius: 8px;
        overflow: hidden;
    }

    &__avatar-image {
        width: 100%;
        object-fit: cover;
    }

    &__name {
        font-size: 12px;
        font-weight: 700;
        color: var(--black-color);
    }
}
</style>
