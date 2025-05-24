<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

</script>

<template>
  <HeaderComponent />

  <!-- Hero Section -->
  <section class="relative h-screen bg-[url('@/assets/images/fond1.jpg')] bg-cover bg-center flex items-center justify-center text-white">
    <div class="bg-black/50 p-8 rounded-xl text-center max-w-xl">
      <h1 class="text-4xl md:text-6xl font-serif italic mb-4">Dreams Pearls</h1>
      <p class="text-xl font-light">Chaque perle raconte une histoire... Voici la nôtre.</p>
    </div>
  </section>

  <!-- Section 1 - Origines -->
  <section class="py-16 px-6 md:px-20 bg-white text-gray-800">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <img src="@/assets/images/fond3.jpg" class="w-full md:w-1/2 rounded-2xl shadow-xl" alt="Origine" />
      <div>
        <h2 class="text-3xl font-semibold mb-4 text-indigo-700">Nos Origines</h2>
        <p class="text-lg leading-relaxed">
          Née de la passion pour l’artisanat et l’élégance naturelle, Dreams Pearls célèbre l’héritage culturel et la beauté pure des perles...
        </p>
      </div>
    </div>
  </section>

  <!-- Section 2 - Notre univers -->
  <section class="py-16 px-6 md:px-20 bg-indigo-50 text-gray-800">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
      <img src="@/assets/images/fond4.jpg" class="w-full md:w-1/2 rounded-2xl shadow-xl" alt="Univers" />
      <div>
        <h2 class="text-3xl font-semibold mb-4 text-indigo-700">Un univers envoûtant</h2>
        <p class="text-lg leading-relaxed">
          Chaque bracelet, chaque chevillère est une invitation à un voyage sensoriel. Des créations artisanales inspirées par la mer, la terre et l’âme.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 3 - L’art de créer -->
  <section class="py-16 px-6 md:px-20 bg-white text-gray-800">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-semibold text-indigo-700 mb-6">L’art derrière chaque bijou</h2>
      <p class="text-lg leading-relaxed max-w-2xl mx-auto">
        Chaque perle est enfilée à la main avec amour, patience et respect. C’est un savoir-faire que nous perpétuons avec fierté, pour révéler la beauté intérieure de chacun.
      </p>
    </div>
  </section>

  <!-- Quote -->
  <section class="py-20 bg-indigo-100 text-center">
    <blockquote class="text-2xl italic font-serif text-indigo-800 max-w-3xl mx-auto">
      "Les perles sont les larmes de la mer, capturées dans l’éternité d’un fil d’or."
    </blockquote>
  </section>

  <FooterComponent />
</template>


<style scoped>

</style>
