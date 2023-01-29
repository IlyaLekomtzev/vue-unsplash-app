import { onBeforeUnmount, onMounted, type Ref } from 'vue';

export function useOutsideClick(targetRef: Ref<HTMLDivElement | null>, callback: () => void) {
    let listener = (e: MouseEvent) => {
        const element = targetRef.value;

        if (!element || e.target == element || e.composedPath().includes(element)) {
            return;
        }

        if (typeof callback == 'function') {
            callback();
        }
    };

    onMounted(() => {
        window.addEventListener('click', listener);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('click', listener);
    });

    return {
        listener
    };
}
