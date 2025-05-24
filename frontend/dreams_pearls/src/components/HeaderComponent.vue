<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menus = ref([
  { name: "Accueil", to: "/" },
  { name: "Produits", to: "/produit" },
  { name: "About", to: "/about" },
  { name: "Panier", to: "/panier" },
  { name: "Contact Us", to: "/contact" },
]);

const isMenuOpen = ref(false);

let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchMove = (e) => {
  touchEndX = e.changedTouches[0].screenX;
};

const handleTouchEnd = () => {
  const distance = touchEndX - touchStartX;
  // Swipe vers la gauche
  if (distance < -50) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) {
    drawer.addEventListener("touchstart", handleTouchStart);
    drawer.addEventListener("touchmove", handleTouchMove);
    drawer.addEventListener("touchend", handleTouchEnd);
  }
});

onBeforeUnmount(() => {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) {
    drawer.removeEventListener("touchstart", handleTouchStart);
    drawer.removeEventListener("touchmove", handleTouchMove);
    drawer.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>


<template>
  <!-- Overlay foncé -->
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
    @click="isMenuOpen = false"
  ></div>

  <!-- Header -->
  <div class="w-full p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <nav class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo avec animation -->
      <h1 class="text-2xl font-extrabold text-indigo-600 transform transition duration-300 hover:scale-105 cursor-pointer">
        Dreams Pearls
      </h1>

      <!-- Hamburger mobile -->
      <button class="block md:hidden p-2 focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <img src="../assets/icons/hamburger.svg" alt="Menu" class="w-6 h-6" />
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex gap-6 items-center text-gray-700">
        <li v-for="(menu, index) in menus" :key="index">
          <router-link
            :to="menu.to"
            class="relative group font-medium text-gray-700 hover:text-indigo-600 transition duration-300"
          >
            {{ menu.name }}
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/panier" class="hover:scale-110 transition duration-300">
            <img src="../assets/icons/panier.svg" alt="Panier" class="w-6 h-6" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Menu Mobile Drawer -->
  <div
    id="mobile-drawer"
    :class="[
      'fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden',
      isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="p-4 flex justify-between items-center border-b">
      <h2 class="text-xl font-semibold text-indigo-600">Menu</h2>
      <button @click="isMenuOpen = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <ul class="flex flex-col gap-4 p-6 text-gray-800 animate-fade-in">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="transition transform duration-300 ease-in-out hover:translate-x-1"
      >
        <router-link
          :to="menu.to"
          class="block py-2 px-4 rounded hover:bg-indigo-100 hover:text-indigo-700 transition"
          @click="isMenuOpen = false"
        >
          {{ menu.name }}
        </router-link>
      </li>
      <li class="transition transform duration-300 ease-in-out hover:translate-x-1">
        <router-link
          to="/panier"
          class="flex items-center gap-2 py-2 px-4 rounded hover:bg-indigo-100 hover:text-indigo-700 transition"
          @click="isMenuOpen = false"
        >
          <img src="../assets/icons/panier.svg" alt="Panier" class="w-5 h-5" />
          <span>Panier</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}
</style>
