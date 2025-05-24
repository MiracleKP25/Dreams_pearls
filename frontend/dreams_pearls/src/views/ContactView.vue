<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


</script>

<template>
  <HeaderComponent/>
  <!-- contact -->
  <div class="my-20 rounded-xl p-6 w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8">
    <!-- Formulaire -->
    <div class="w-full lg:w-1/2 animate-slide-in-left">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-center text-black/50 mb-6 animate-fade-in">
        Pour plus d'informations <span class="text-indigo-600/50 font-serif italic">Contactez-nous</span>
      </h1>

      <form class="space-y-6 slide-in-left">
        <!-- Nom -->
        <div class=" delay-100">
          <label for="name" class="block text-sm font-medium text-indigo-500 font-serif">Nom</label>
          <input
            type="text"
            id="name"
            required
            class="w-full px-4 py-3 mt-2 border rounded-lg placeholder-indigo-900/50 focus:outline-none  focus:ring-indigo-900 transition-all duration-300"
            placeholder="Votre nom complet"
          />
        </div>

        <!-- Email -->
        <div class="animate-fade-in-up delay-200">
          <label for="email" class="block text-sm font-medium text-indigo-500 font-serif">Email</label>
          <input
            type="email"
            id="email"
            required
            class="w-full px-4 py-3 mt-2 border  rounded-lg bg-[#FFF9F5] placeholder-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-indigo-900 transition-all duration-300"
            placeholder="Votre email"
          />
        </div>

        <!-- Description -->
        <div class="animate-fade-in-up delay-200">
          <label for="description" class="block text-sm font-medium text-indigo-500 font-serif">Description</label>
          <textarea
            id="description"
            rows="4"
            required
            class="w-full px-4 py-3 mt-2 border border-indigo-500 rounded-lg bg-[#FFF9F5] placeholder-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-indigo-900 transition-all duration-300"
            placeholder="Vos préoccupations sont les bienvenues"
          ></textarea>
        </div>

        <!-- Bouton -->
        <div class="animate-fade-in-up delay-500">
          <button
            type="submit"
            class="w-full py-3 px-4 text-white bg-gradient-to-r from-indigo-200 to-indigo-500 hover:from-indigo-800 hover:to-indigo-200 focus:ring-2 focus:ring-indigo-900 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] font-serif tracking-wider"
          >
            Contactez-nous
          </button>
        </div>
      </form>
    </div>

    <!-- Image -->
    <div class="w-full lg:w-1/2 slide-in-right">
      <img
        src="../assets/images/baya/ba1.jpg"
        alt="reservation"
        class="w-full max-h-[500px] object-cover rounded-xl shadow-2xl border-4 border-white hover:rotate-1 hover:shadow-3xl transition-all duration-1000"
      />
    </div>
  </div>

  <FooterComponent/>
</template>

<style scoped>
/* Animation d’apparition du formulaire */
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 1s ease-out forwards;
}

</style>
