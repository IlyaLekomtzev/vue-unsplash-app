<template>
    <div class="feed-wrapper">
        <div v-if="!feedStore.isLoading && feedStore.feed.length === 0" class="center-wrapper">Not data</div>

        <div v-if="feedStore.feed.length > 0" class="feed-list">
            <FeedItem
                v-for="(item, index) in feedStore.feed"
                :key="`${item.id}-${index}`"
                :user="{
                    id: item.user.id,
                    username: item.user.username,
                    avatarSrc: item.user.profile_image.small
                }"
                :likes="item.likes"
                :description="item.description"
                :image-src="item.urls.regular"
            />
        </div>

        <div v-if="feedStore.isLoading" class="center-wrapper">Loading..</div>

        <div v-if="!feedStore.isLoading && feedStore.isLoadedFirstPage && feedStore.hasNext" class="center-wrapper">
            <Button @click="loadMore">Load more</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useFeedStore } from '@/stores/feed';
import { onMounted } from 'vue';
import FeedItem from './FeedItem.vue';

const feedStore = useFeedStore();

const loadMore = () => {
    feedStore.getFeed();
};

onMounted(() => {
    if (!feedStore.isLoadedFirstPage) {
        feedStore.getFeed();
    }
});
</script>

<style scoped lang="scss">
.feed-wrapper {
    width: 100%;
}
.feed-list {
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>
