<template>
    <header class="px-8 lg:px-12">
        <h1 class="text-white text-3xl font-bold">{{ title }}</h1>
        <p class="my-6 w-full md:w-[500px] text-white">
            {{ desc }}
        </p>
    </header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});
</script>
