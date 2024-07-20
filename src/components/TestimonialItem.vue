<template>
    <div>
        <img
            class="h-32 w-32 object-cover rounded-full mx-auto"
            :src="singleTestimony.image"
            :alt="singleTestimony.name"
        />
        <div class="shadow-xl rounded-md px-6 pb-6 pt-16 -mt-12 bg-orange-400">
            <p class="text-4xl text-teal-500 text-center">"</p>
            <blockquote class="text-justify">
                {{ singleTestimony.text }}
            </blockquote>
            <p class="text-4xl text-teal-500 text-center">"</p>
            <cite>{{ singleTestimony.name }}</cite>
            <p>
                - {{ singleTestimony.jobTitle }} of
                {{ singleTestimony.company }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    singleTestimony: Object,
});
</script>
