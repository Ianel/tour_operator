<template>
    <div class="w-full h-[300px] relative group">
        <img
            class="rounded-md w-full h-full object-cover"
            :src="singleBusiness.image"
            :alt="singleBusiness.name"
        />
        <div
            class="h-full w-full bg-opacity-40 group-hover:bg-opacity-60 transition-opacity rounded-md bg-black z-50 absolute top-0 left-0"
        ></div>
        <div class="p-6 absolute bottom-0 left-0 text-white z-50">
            <h4 class="font-bold">&gt; {{ singleBusiness.name }}</h4>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    singleBusiness: Object,
});
</script>
