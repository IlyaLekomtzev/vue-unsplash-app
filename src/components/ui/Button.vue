<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="['button', { 'button--wide': wide }, className]"
        @click="handleClick"
    >
        <slot>Click</slot>
    </button>
</template>

<script setup lang="ts">
// Initial
interface Props {
    type?: 'submit' | 'button';
    className?: string;
    disabled?: boolean;
    wide?: boolean;
}

withDefaults(defineProps<Props>(), {
    type: 'button',
    disabled: false,
    wide: false
});

const emits = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

// Handlers
const handleClick = (event: MouseEvent) => {
    emits('click', event);
};
</script>

<style scoped lang="scss">
.button {
    font-weight: 500;
    font-size: 14px;
    color: var(--grey-light-color);
    padding: 12px 25px;
    background-color: var(--primary-color);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: var(--transition);

    &--wide {
        width: 100%;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: var(--grey-color);
    }

    &:hover:not(:disabled) {
        background-color: var(--primary-dark-color);
    }

    &:active:not(:disabled) {
        background-color: var(--primary-light-color);
    }
}
</style>
