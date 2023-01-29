<template>
    <div class="account">
        <div class="account__avatar">
            <img :src="data.profile_image.large" :alt="data.username" class="account__avatar-image" />
        </div>

        <div class="account__names">
            <div class="account__name">{{ data.name || '-' }}</div>
            <div class="account__username">@{{ data.username }}</div>
        </div>

        <div class="account__counters">
            <div class="account__counter counter">
                <div class="counter__value">{{ data.followers_count || 0 }}</div>
                <div class="counter__title">Followers</div>
            </div>

            <div class="account__counter counter">
                <div class="counter__value">{{ data.following_count || 0 }}</div>
                <div class="counter__title">Following</div>
            </div>

            <div class="account__counter counter">
                <div class="counter__value">{{ data.downloads || 0 }}</div>
                <div class="counter__title">Downloads</div>
            </div>

            <div class="account__counter counter">
                <div class="counter__value">{{ data.total_photos || 0 }}</div>
                <div class="counter__title">Photos</div>
            </div>

            <div class="account__counter counter">
                <div class="counter__value">{{ data.total_likes || 0 }}</div>
                <div class="counter__title">Likes</div>
            </div>

            <div class="account__counter counter">
                <div class="counter__value">{{ data.total_collections || 0 }}</div>
                <div class="counter__title">Collections</div>
            </div>
        </div>

        <div v-if="data.bio" class="account__bio bio">
            <div class="bio__title">Bio</div>
            <div class="bio__text">
                {{ data.bio }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IUser } from '@/types/api';

interface Props {
    data: IUser;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.account {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__avatar {
        width: 128px;
        height: 128px;
        flex-shrink: 0;
        border-radius: 8px;
        overflow: hidden;
        margin: 0 auto;
    }

    &__avatar-image {
        width: 100%;
        object-fit: cover;
    }

    &__names {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    &__name {
        font-size: 20px;
        font-weight: 700;
        color: var(--black-color);
    }

    &__username {
        font-size: 12px;
        color: var(--primary-color);
    }

    &__counters {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

.counter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 3px;
    text-align: center;

    &:nth-child(-n + 3) {
        border-bottom: 1px solid var(--grey-light-color);
    }

    &:nth-child(3n + 1) {
        border-right: 1px solid var(--grey-light-color);
    }

    &:nth-child(3n) {
        border-left: 1px solid var(--grey-light-color);
    }

    &__value {
        font-size: 18px;
        font-weight: 700;
        color: var(--black-color);
    }
}

.bio {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__title {
        font-size: 16px;
        font-weight: 700;
        color: var(--black-color);
    }

    &__text {
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        color: var(--grey-color);
    }
}
</style>
