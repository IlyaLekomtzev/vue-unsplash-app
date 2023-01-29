import { customRef, ref } from 'vue';

const debounce = (fn: (arg: string) => void, delay = 0, immediate = false) => {
    let timeout: any;

    return (arg: string) => {
        if (immediate && !timeout) fn(arg);
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn(arg);
        }, delay);
    };
};

const useDebouncedRef = (initialValue: string, delay = 1000, immediate = false) => {
    const state = ref(initialValue);
    const debouncedRef = customRef((track, trigger) => ({
        get() {
            track();
            return state.value;
        },
        set: debounce(
            value => {
                state.value = value;
                trigger();
            },
            delay,
            immediate
        )
    }));
    return debouncedRef;
};

export default useDebouncedRef;
