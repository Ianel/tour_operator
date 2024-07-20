<template>
    <div class="w-full h-[500px] relative cursor-pointer group">
        <img
            class="rounded-md h-full w-full object-cover"
            :src="singleTour.image"
            :alt="singleTour.name"
        />
        <div
            class="h-full w-full bg-opacity-40 group-hover:bg-opacity-60 transition-opacity rounded-md bg-black z-50 absolute top-0 left-0"
        ></div>
        <div class="p-6 absolute bottom-0 left-0 text-white z-50">
            <h4 class="font-bold">{{ singleTour.name }}</h4>
            <span class="text-orange-500 font-semibold"
                >&gt; {{ singleTour.location }}</span
            >
            <p class="text-teal-500 font-semibold">${{ singleTour.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    singleTour: Object,
});
</script>
