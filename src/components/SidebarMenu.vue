<template>
    <section
        class="text-white p-8 lg:p-12 flex flex-col justify-center relative z-50"
    >
        <nav class="font-semibold flex flex-row md:flex-col gap-4 lg:gap-8">
            <button
                v-for="index in dataLength"
                :class="[
                    {
                        'border-b-2 border-b-2-white md:border-b-transparent md:border-r-2 md:border-r-2-white':
                            currentIndex + 1 === index,
                    },
                    'px-2 md:px-4 md:py-1',
                ]"
                @click="selectId(index)"
            >
                {{ index }}
            </button>
        </nav>
    </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["buttonClick"]);

const props = defineProps({
    dataLength: {
        type: Number,
        required: true,
    },
    currentIndex: {
        type: Number,
        required: true,
    },
});

const selectId = (index) => {
    emit("buttonClick", index);
};
</script>
