import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const image = ref(null);

    const selectedTour = ref({});
    const showTourModal = ref(false);

    const selectedBusiness = ref({});
    const showBusinessModal = ref(false);

    const openBusinessModal = () => {
        showBusinessModal.value = true;
        localStorage.setItem("isBusinessOpen", true);
    };

    const closeBusinessModal = () => {
        showBusinessModal.value = false;
        localStorage.setItem("isBusinessOpen", false);
    };

    const openTourModal = () => {
        showTourModal.value = true;
        localStorage.setItem("isTourOpen", true);
    };

    const closeTourModal = () => {
        showTourModal.value = false;
        localStorage.setItem("isTourOpen", false);
    };

    return {
        image,
        selectedTour,
        showTourModal,
        openTourModal,
        closeTourModal,
        selectedBusiness,
        showBusinessModal,
        openBusinessModal,
        closeBusinessModal,
    };
});
