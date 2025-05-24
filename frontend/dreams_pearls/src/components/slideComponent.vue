<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ref([
  { id: 1, src: new URL(`@/assets/images/baya/ba1.jpg`, import.meta.url).href, alt: 'Description 1' },
  { id: 2, src: new URL(`@/assets/images/baya/ba2.jpg`, import.meta.url).href, alt: 'Description 2' },
  { id: 3, src: new URL(`@/assets/images/baya/ba3.jpg`, import.meta.url).href, alt: 'Description 3' },
  { id: 4, src: new URL(`@/assets/images/baya/ba4.jpg`, import.meta.url).href, alt: 'Description 4' },
  { id: 5, src: new URL(`@/assets/images/baya/ba5.jpg`, import.meta.url).href, alt: 'Description 5' },
  { id: 6, src: new URL(`@/assets/images/baya/ba6.jpg`, import.meta.url).href , alt: 'Description 6' },
  { id: 7, src: new URL(`@/assets/images/baya/ba7.jpg`, import.meta.url).href, alt: 'Description 7' },
  { id: 8, src: new URL(`@/assets/images/baya/ba8.jpg`, import.meta.url).href, alt: 'Description 8' },
  { id: 9, src: new URL(`@/assets/images/baya/ba9.jpg`, import.meta.url).href, alt: 'Description 9' },
  { id: 10, src:  new URL(`@/assets/images/baya/ba10.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 11, src: new URL(`@/assets/images/baya/ba11.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 12, src: new URL(`@/assets/images/baya/ba12.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 13, src: new URL(`@/assets/images/baya/ba13.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 14, src: new URL(`@/assets/images/baya/ba14.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 15, src: new URL(`@/assets/images/baya/ba15.jpg`, import.meta.url).href, alt: 'Description 10' },
  { id: 16, src: new URL(`@/assets/images/baya/ba16.jpg`, import.meta.url).href, alt: 'Description 10' },
]);

const slider = ref(null);
const sliderContent = ref(null);
const speed = 1; // Vitesse de défilement (en pixels par frame)
let animationId = null;

// Duplique les images pour l'effet infini
const duplicatedImages = [...images.value, ...images.value];

const startAnimation = () => {
  const sliderWidth = sliderContent.value.scrollWidth / 2;

  if (slider.value.scrollLeft >= sliderWidth) {
    slider.value.scrollLeft -= sliderWidth;
  } else {
    slider.value.scrollLeft += speed;
  }

  animationId = requestAnimationFrame(startAnimation);
};

onMounted(() => {
  startAnimation();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
});
</script>

<template>
<section class=" py-16 my-20 bg-indigo-50">
  <div class="relative group">
    <!-- Slider -->
    <div
      ref="slider"
      class="w-full overflow-hidden"
    >
      <div
        ref="sliderContent"
        class="flex w-max gap-4 py-4"
      >
        <!-- Images dupliquées pour l'effet infini -->
        <div
          v-for="(image, index) in duplicatedImages"
          :key="`${image.id}-${index}`"
          class="relative flex-shrink-0 w-40 h-52 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="absolute inset-0 w-full h-full object-cover"
          />

        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-6 flex justify-center flex-col lg:flex-row items-center gap-12 animate-fade-in-up duration-1000">

  </div>
</section>
</template>
<style scoped>
.slider-animation {
  animation: slide 20s linear infinite;
}

@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
