<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';

// Chemins manuels (fonctionnent toujours avec Vite)
const accessoryImages = [
  new URL('@/assets/images/accessoires/a1.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a2.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a3.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a4.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a5.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a6.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a7.jpg', import.meta.url).href,
  new URL('@/assets/images/accessoires/a9.jpg', import.meta.url).href,
];
</script>


<template>
  <HeaderComponent />
  <ProductComponent />

  <!-- Section Accessoires -->
  <section class="container mx-auto px-4 py-10">
    <h2 class="text-3xl text-center font-serif text-indigo-700 mb-10 italic">
      Nos Accessoires en perles pour nos réalisations
    </h2>

    <!-- Grille responsive -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <div
        v-for="(image, index) in accessoryImages"
        :key="index"
        class="group w-64 h-64 relative"
      >
        <div class="clip-hexagon w-full h-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-indigo-400 group-hover:border-indigo-600">
          <img
            :src="image"
            :alt="`Accessoire perle ${index + 1}`"
            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <FooterComponent />
</template>

<style scoped>
/* Hexagone stylisé avec coins arrondis */
.clip-hexagon {
  clip-path: polygon(
    25% 6.7%,
    75% 6.7%,
    100% 50%,
    75% 93.3%,
    25% 93.3%,
    0% 50%
  );
  border-radius: 1rem;
}
</style>
