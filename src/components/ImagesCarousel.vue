<template>
    <Carousel
        ref="carousel"
        v-model="currentSlide"
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="true"
        :transition="500"
        snapAlign="start"
        class="bg-transparent"
    >
        <Slide
            v-for="(slide, index) in images"
            :key="slide"
            class="flex items-center object-cover text-white bg-transparent"
            ><img
                class="w-full max-h-72 object-cover"
                :src="slide.image"
                alt="slide.altText"
        /></Slide>

        <template #addons>
            <Navigation class="text-orange-500 bg-red-500" />
        </template>
    </Carousel>
</template>

<script setup>
import { ref, toRefs } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

let currentSlide = ref(0);

const props = defineProps({
    images: Array,
});

const { images } = toRefs(props);

const currentSlideObject = (slide, index) => {
    if (index === currentSlide.value) {
        image.value = slide;
    }
};
</script>

<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
    color: white;
}
</style>
