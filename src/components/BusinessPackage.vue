<template>
    <div id="businesses" class="px-8 py-12 lg:px-12">
        <h2 class="text-orange-500 text-center text-sm">BUSINESS INVESTMENT</h2>
        <h3 class="text-xl text-center font-bold my-3">What we do</h3>
        <p class="text-justify my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate
            dolorem vel repellat! Ad doloribus est nobis esse, tempora quod
            natus!
        </p>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer"
        >
            <div v-for="business in businesses">
                <BusinessItem
                    :singleBusiness="business"
                    @click="() => showBusiness(business.id)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BusinessItem from "./BusinessItem.vue";
import {
    business1,
    business2,
    business3,
    business4,
    business5,
    business6,
} from "../assets/images";
import { generateId } from "../helpers/generateId";
import { useModalStore } from "../store/modal";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const { selectedBusiness } = storeToRefs(modalStore);
const { openBusinessModal } = modalStore;

const businesses = ref([
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "Agribusiness",
        image: business1,
    },
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "ICT",
        image: business2,
    },
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "Mining",
        image: business3,
    },
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "Marketing",
        image: business4,
    },
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "Coaching",
        image: business5,
    },
    {
        id: generateId(),
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ipsa iure fuga quos libero aliquid eos harum, cupiditate dolorem vel repellat! Ad doloribus est nobis esse, tempora quod natus!",
        name: "Ecotourism",
        image: business6,
    },
]);

const showBusiness = (businessId) => {
    let filteredBusiness = businesses.value.filter(
        (business) => business.id === businessId
    );

    if (filteredBusiness.length > 0) {
        console.log(filteredBusiness[0]);
        selectedBusiness.value = filteredBusiness[0];

        localStorage.setItem(
            "selectedBusiness",
            JSON.stringify(selectedBusiness.value)
        );

        openBusinessModal();
    }
};
</script>
