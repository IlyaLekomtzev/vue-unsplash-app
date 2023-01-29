<template>
    <div v-if="!photosStore.isLoading && photosStore.photos.length > 0" class="user-photos">
        <div class="user-photos__header">Photos</div>

        <div class="user-photos__items photos">
            <div v-for="photo in photosStore.photos" class="photos__item">
                <img :src="photo.urls.small" :alt="photo.description || `By ${username}`" class="photos__item-image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserPhotosStore } from '@/stores/user';
import { onMounted } from 'vue';

interface Props {
    username: string;
}

const { username } = defineProps<Props>();

const photosStore = useUserPhotosStore();

onMounted(() => {
    photosStore.getPhotos(username);
});
</script>

<style scoped lang="scss">
.user-photos {
    width: 100%;

    &__header {
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--grey-light-color);
        font-size: 16px;
        font-weight: 700;
        color: var(--black-color);
        margin-bottom: 30px;
    }
}

.photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    &__item {
        width: 100%;
        height: 165px;
        border-radius: 8px;
        overflow: hidden;
    }

    &__item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
