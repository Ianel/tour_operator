<template>
    <div class="px-8 lg:px-12 pb-12">
        <h2 class="text-orange-500 text-center text-sm">TESTIMONIALS</h2>
        <h3 class="text-xl text-center font-bold my-3">What our clients say</h3>
        <p class="text-justify my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate
            dolorem vel repellat! Ad doloribus est nobis esse, tempora quod
            natus!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialItem
                v-for="testimony in testimonials"
                :singleTestimony="testimony"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { generateId } from "../helpers/generateId";
import { client1, client2 } from "../assets/images";
import TestimonialItem from "./TestimonialItem.vue";

const testimonials = ref([
    {
        id: generateId(),
        name: "John Stockton",
        jobTitle: "CEO",
        company: "Meta",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        image: client1,
    },
    {
        id: generateId(),
        name: "Jason Kidd",
        jobTitle: "Head Coach",
        company: "Apple",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        image: client2,
    },
]);
</script>
