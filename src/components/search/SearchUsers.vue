<template>
    <div class="search-users" ref="parentRef">
        <Input placeholder="Search user" v-model:value="query" @focus="handleFocus" />

        <Transition name="slide-fade">
            <div v-if="dropDownIsVisible" class="search-users__dropdown">
                <div v-if="usersSearchStore.isLoading" class="center-wrapper">Loading..</div>
                <RouterLink
                    v-else-if="usersSearchStore.users.length > 0"
                    v-for="user in usersSearchStore.users"
                    :key="user.id"
                    :to="`${AppRoute.User}/${user.username}`"
                    class="search-users__item user"
                >
                    <div class="user__avatar">
                        <img :src="user.profile_image.small" alt="Avatar" class="user__avatar-image" />
                    </div>
                    <div class="user__name">@{{ user.username }}</div>
                </RouterLink>
                <div v-else class="center-wrapper">Not data</div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import Input from '@/components/ui/Input.vue';
import useDebouncedRef from '@/composables/use-debounced-ref';
import { useOutsideClick } from '@/composables/use-outside-click';
import { AppRoute } from '@/router';
import { useUsersSearchStore } from '@/stores/users-search';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const parentRef = ref<HTMLDivElement | null>(null);
const isFocused = ref(false);
const query = useDebouncedRef('');
const dropDownIsVisible = computed(() => query.value.length > 2 && isFocused.value);

const usersSearchStore = useUsersSearchStore();

useOutsideClick(parentRef, () => {
    isFocused.value = false;
});

const handleFocus = () => {
    isFocused.value = true;
};

watch(query, searchValue => {
    if (searchValue.length > 2) {
        usersSearchStore.getUsers(searchValue);
    }
});

watch(route, () => {
    isFocused.value = false;
});
</script>

<style scoped lang="scss">
.search-users {
    width: 100%;
    position: relative;

    &__dropdown {
        position: absolute;
        top: calc(100% + 2px);
        left: 0;
        right: 0;
        width: 100%;
        max-height: 50vh;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        border-radius: 10px;
        background-color: var(--white-color);
        border: 1px solid var(--grey-light-2-color);
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 10;
    }
}

.user {
    width: 100%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    background-color: var(--white-color);
    border-bottom: 1px solid var(--grey-light-color);
    transition: var(--transition);

    &:hover {
        background-color: var(--grey-light-color);
    }

    &__avatar {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 8px;
        overflow: hidden;
    }

    &__avatar-image {
        width: 100%;
        object-fit: cover;
    }

    &__name {
        font-size: 14px;
        font-weight: 700;
        color: var(--black-color);
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: var(--transition);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>
