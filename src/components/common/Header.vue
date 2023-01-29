<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <RouterLink :to="AppRoute.Main" class="header__home">
                    <img :src="homeSrc" alt="Home" width="24" height="24" />
                </RouterLink>

                <div class="header__search">
                    <SearchUsers />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import homeSrc from '@/assets/home.png';
import SearchUsers from '@/components/search/SearchUsers.vue';
import { AppRoute } from '@/router';
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid var(--grey-light-color);

    &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 15px;
    }

    &__home {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    &__search {
        flex-grow: 1;
    }
}
</style>
