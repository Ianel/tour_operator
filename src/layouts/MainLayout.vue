<template>
    <slot />

    <footer class="px-8 py-8 bg-zinc-100 flex flex-col items-center">
        <nav class="z-50 relative px-12 flex gap-5">
            <RouterLink
                v-for="link in navLinks"
                :key="link.id"
                :to="link.path"
                >{{ link.label }}</RouterLink
            >
        </nav>

        <p>
            &copy; Copyright {{ new Date(Date.now()).getFullYear() }} - All
            rights reserved
        </p>
    </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { generateId } from "../helpers/generateId";

const navLinks = ref([
    {
        id: generateId(),
        path: "#home",
        label: "Home",
    },
    {
        id: generateId(),
        path: "#tours",
        label: "Tours",
    },
    {
        id: generateId(),
        path: "#businesses",
        label: "Businesses",
    },
]);
</script>
