<template>
    <div
        v-if="showTourModal"
        class="bg-zinc-100 h-screen w-screen md:w-[75vw] lg:w-1/2 z-50 absolute top-0 right-0 p-8 overflow-scroll"
    >
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">{{ selectedTour.name }}</h2>
            <button
                @click="closeTourModal"
                class="bg-red-500 cursor-pointer hover:bg-red-800 flex justify-center items-center w-9 h-9 rounded-full text-white p-3"
            >
                <span>X</span>
            </button>
        </div>
        <h3 class="text-orange-500 font-semibold">${{ selectedTour.price }}</h3>
        <div>
            <ImagesCarousel class="py-6" :images="selectedTour.images" />
        </div>
        <div class="mt-6">
            <div v-for="program in selectedTour.program" class="mb-6">
                <h4 class="font-semibold">{{ program.label }}:</h4>
                <p class="text-justify">{{ program.text }}</p>
            </div>
        </div>
    </div>
    <div
        v-if="showTourModal"
        class="absolute top-0 left-0 w-screen h-screen bg-opacity-50 bg-black"
        @click="closeTourModal"
    ></div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useModalStore } from "../store/modal";
import { onMounted, watch, ref } from "vue";
import ImagesCarousel from "./ImagesCarousel.vue";
import { generateId } from "../helpers/generateId";
import { pexels1, pexels2, pexels3 } from "../assets/images";

const images = ref([
    {
        id: generateId(),
        image: pexels1,
        altText: "Image 1",
    },
    {
        id: generateId(),
        image: pexels2,
        altText: "Image 2",
    },
    {
        id: generateId(),
        image: pexels3,
        altText: "Image 3",
    },
]);

const modalStore = useModalStore();
const { selectedTour, showTourModal } = storeToRefs(modalStore);
const { closeTourModal } = modalStore;

watch(showTourModal, (value, prevValue) => {
    console.log(value);

    if (value) {
        window.scrollTo({ top: 0 });
        document.documentElement.style.overflow = "hidden";
    } else {
        document.documentElement.style.overflowY = "unset";
    }

    document.documentElement.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
            closeTourModal();
        }
    });
});

onMounted(() => {
    if (localStorage.getItem("isTourOpen") == true) {
        showTourModal.value = localStorage.getItem("isTourOpen");
    }

    if (localStorage.getItem("selectedTour")) {
        selectedTour.value = JSON.parse(localStorage.getItem("selectedTour"));
    }
});
</script>
