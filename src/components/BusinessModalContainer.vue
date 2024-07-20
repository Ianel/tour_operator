<template>
    <div
        v-if="showBusinessModal"
        class="bg-zinc-100 h-screen w-screen md:w-[75vw] lg:w-1/2 z-50 absolute top-0 right-0 p-8 overflow-scroll"
    >
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">{{ selectedBusiness.name }}</h2>
            <button
                @click="closeBusinessModal"
                class="bg-red-500 hover:bg-red-800 cursor-pointer flex justify-center items-center w-9 h-9 rounded-full text-white p-3"
            >
                <span>X</span>
            </button>
        </div>

        <div class="mt-6">
            <p>{{ selectedBusiness.text }}</p>
        </div>
    </div>
    <div
        v-if="showBusinessModal"
        class="absolute top-0 left-0 w-screen h-screen bg-opacity-50 bg-black"
        @click="closeBusinessModal"
    ></div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useModalStore } from "../store/modal";
import { onMounted, watch } from "vue";

const modalStore = useModalStore();
const { selectedBusiness, showBusinessModal } = storeToRefs(modalStore);
const { closeBusinessModal } = modalStore;

watch(showBusinessModal, (value, prevValue) => {
    if (value) {
        window.scrollTo({ top: 0 });
        document.documentElement.style.overflow = "hidden";
    } else {
        document.documentElement.style.overflowY = "unset";
    }

    document.documentElement.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
            closeBusinessModal();
        }
    });
});

onMounted(() => {
    if (localStorage.getItem("isBusinessOpen") === true) {
        showBusinessModal.value = localStorage.getItem("isBusinessOpen");
    }

    if (localStorage.getItem("selectedBusiness")) {
        selectedBusiness.value = JSON.parse(
            localStorage.getItem("selectedBusiness")
        );
    }
});
</script>
