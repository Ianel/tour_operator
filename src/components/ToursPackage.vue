<template>
    <div id="tours" class="px-8 pt-12 lg:px-12 lg:pb-0">
        <h2 class="text-orange-500 text-center text-sm">TOURS PACKAGES</h2>
        <h3 class="text-xl text-center font-bold my-3">What we give you</h3>
        <p class="text-justify my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate
            dolorem vel repellat! Ad doloribus est nobis esse, tempora quod
            natus!
        </p>
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            <div v-for="tour in tours">
                <TourItem :singleTour="tour" @click="() => showTour(tour.id)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useModalStore } from "../store/modal";
import TourItem from "./TourItem.vue";
import {
    pexels1,
    pexels2,
    pexels3,
    pexels4,
    tour1,
    tour2,
    tour3,
    tour4,
} from "../assets/images";
import { generateId } from "../helpers/generateId";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const { selectedTour } = storeToRefs(modalStore);
const { openTourModal } = modalStore;

const tours = ref([
    {
        id: generateId(),
        name: "Sakalava Tour",
        price: 950,
        image: tour1,
        location: "North West",
        images: [
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
        ],
        program: [
            {
                label: "Day 1",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 2",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 3",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 4",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
        ],
    },
    {
        id: generateId(),
        name: "Vezo Tour",
        price: 1250,
        image: tour2,
        location: "South",
        images: [
            {
                id: generateId(),
                image: pexels3,
                altText: "Image 3",
            },
            {
                id: generateId(),
                image: pexels4,
                altText: "Image 4",
            },
        ],
        program: [
            {
                label: "Day 1",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 2",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
        ],
    },
    {
        id: generateId(),
        name: "Indri Tour",
        price: 1625,
        image: tour3,
        location: "Center",
        images: [
            {
                id: generateId(),
                image: tour1,
                altText: "Image 6",
            },
            {
                id: generateId(),
                image: tour2,
                altText: "Image 7",
            },
        ],
        program: [
            {
                label: "Day 1",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 2",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 3",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
        ],
    },
    {
        id: generateId(),
        name: "Baobab Tour",
        price: 1750,
        image: tour4,
        location: "South West",
        images: [
            {
                id: generateId(),
                image: tour3,
                altText: "Image 7",
            },
            {
                id: generateId(),
                image: tour4,
                altText: "Image 8",
            },
        ],
        program: [
            {
                label: "Day 1",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 2",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 3",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 4",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 5",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
            {
                label: "Day 6",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga qlibero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
            },
        ],
    },
]);

const showTour = (tourId) => {
    let filteredTour = tours.value.filter((tour) => tour.id === tourId);

    if (filteredTour.length > 0) {
        selectedTour.value = filteredTour[0];

        localStorage.setItem(
            "selectedTour",
            JSON.stringify(selectedTour.value)
        );

        openTourModal();
    }
};
</script>
