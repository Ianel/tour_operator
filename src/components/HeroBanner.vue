<template>
    <div id="home">
        <div class="h-screen w-screen bg-green-200 absolute top-0 left-0">
            <img
                class="z-10 object-cover w-full h-full"
                :src="datas[currentDataIndex]['image']"
                :alt="datas[currentDataIndex]['title']"
            />
            <div
                class="flex justify-between items-center px-12 py-6 absolute top-0 left-0"
            >
                <RouterLink to="/">
                    <h1 class="z-50 relative w-24">
                        <img :src="logo" alt="Logo du site" />
                    </h1>
                </RouterLink>
                <nav class="hidden z-50 relative px-12 py-6 text-white">
                    <RouterLink
                        v-for="link in navLinks"
                        :key="link.id"
                        :to="link.path"
                        >{{ link.label }}</RouterLink
                    >
                </nav>
            </div>
        </div>
        <div
            class="h-screen w-screen bg-black relative top-0 left-0 bg-opacity-30 pt-24 md:pt-0 flex flex-col md:flex-row justify-between items-center"
        >
            <HeaderInformations
                :title="datas[currentDataIndex]['title']"
                :desc="datas[currentDataIndex]['desc']"
            />
            <SidebarMenu
                @buttonClick="getCurrentData"
                :dataLength="datas.length"
                :currentIndex="currentDataIndex"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { pexels1, pexels2, pexels3, pexels4, logo } from "../assets/images";
import HeaderInformations from "./HeaderInformations.vue";
import SidebarMenu from "./SidebarMenu.vue";
import { generateId } from "../helpers/generateId";

const currentDataIndex = ref(0);

const datas = ref([
    {
        id: generateId(),
        title: "Netflix",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae ut omnis culpa saepe illo a, cupiditate blanditiis necessitatibus mollitia voluptas illum obcaecati quos placeat libero eius. Maiores, facere magni.",
        image: pexels1,
    },
    {
        id: generateId(),
        title: "Amazon Prime Video",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae ut omnis culpa saepe illo a, cupiditate blanditiis necessitatibus mollitia voluptas illum obcaecati quos placeat libero eius. Maiores, facere magni.",
        image: pexels2,
    },
    {
        id: generateId(),
        title: "Universal +",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae ut omnis culpa saepe illo a, cupiditate blanditiis necessitatibus mollitia voluptas illum obcaecati quos placeat libero eius. Maiores, facere magni.",
        image: pexels3,
    },
    {
        id: generateId(),
        title: "Disney +",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae ut omnis culpa saepe illo a, cupiditate blanditiis necessitatibus mollitia voluptas illum obcaecati quos placeat libero eius. Maiores, facere magni.",
        image: pexels4,
    },
]);

const getCurrentData = (index) => {
    currentDataIndex.value = index - 1;
};

const autoplayCarousel = () => {
    if (currentDataIndex.value >= datas.value.length - 1) {
        currentDataIndex.value = 0;
    } else {
        ++currentDataIndex.value;
    }
};

const interval = setInterval(autoplayCarousel, 3000);

const navLinks = ref([
    {
        id: generateId(),
        path: "/",
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
