<template>
    <div class="input-wrapper">
        <input
            :name="name"
            :placeholder="placeholder"
            :type="type"
            :value="value"
            :class="['input', className]"
            @input="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
        />
    </div>
</template>

<script setup lang="ts">
// Initial
interface Props {
    className?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    value?: string;
}

withDefaults(defineProps<Props>(), {
    type: 'text',
    value: ''
});

const emits = defineEmits(['update:value', 'focus', 'blur']);

// Handlers
const handleChange = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).value);
};

const handleFocus = () => {
    emits('focus');
};

const handleBlur = () => {
    emits('blur');
};
</script>

<style scoped lang="scss">
.input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    outline: none;
    border: 1px solid var(--grey-light-2-color);
    border-radius: 10px;
    transition: var(--transition);

    &:hover,
    &:focus {
        border-color: var(--primary-color);
    }
}
</style>
