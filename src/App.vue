<template>
    <Header />
    <RouterView />
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import { RouterView } from 'vue-router';
</script>
