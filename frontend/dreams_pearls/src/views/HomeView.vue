<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import ProductComponent from '@/components/ProductComponent.vue';

const images = ref([
  { href: new URL('@/assets/images/fond1.jpg', import.meta.url).href, alt: "fond d'écran 1" },
  { href: new URL('@/assets/images/fond5.jpg', import.meta.url).href, alt: "fond d'écran 2" },
  { href: new URL('@/assets/images/fond4.jpg', import.meta.url).href, alt: "fond d'écran 3" },
  { href: new URL('@/assets/images/fond6.jpg', import.meta.url).href, alt: "fond d'écran 6" },
  { href: new URL('@/assets/images/fond2.jpg', import.meta.url).href, alt: "fond d'écran 3" },
]);

let currentIndex = ref(0);

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
}

let interval;
onMounted(() => {
  interval = setInterval(nextSlide, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});

function goToSlide(index) {
  currentIndex.value = index;
}

const categories = [
  {
    title: 'Bracelets en perles',
    image: new URL('@/assets/images/bracelet/b5.jpg', import.meta.url).href, // à remplacer par tes images
  },
  {
    title: 'Colier en perles',
    image: new URL('@/assets/images/collier/c1.jpg', import.meta.url).href,
  },
  {
    title: 'Boucles en perles',
    image: new URL('@/assets/images/boucle/bo1.jpg', import.meta.url).href,
  },
  {
    title: 'Baya en perles',
    image: new URL('@/assets/images/baya/ba1.jpg', import.meta.url).href,
  },
  {
    title: 'perles au pied',
    image: new URL('@/assets/images/pieds/p4.jpg', import.meta.url).href,
  },
];
</script>

<template>
    <HeaderComponent />
    <div class="slider">
      <transition name="fade" mode="out-in">
        <div class="slide-container" :key="currentIndex">
          <img :src="images[currentIndex].href" :alt="images[currentIndex].alt" class="slide-image w-svh" />
          <!-- Couche noire semi-transparente sur l'image -->
          <div class="overlay"></div>

        </div>
      </transition>

      <!-- Boutons de navigation -->
      <div class="controls">
        <button @click="prevSlide" class="control-button prev-button">
          &#8592; <!-- Flèche gauche -->
        </button>
        <button @click="nextSlide" class="control-button next-button">
          &#8594; <!-- Flèche droite -->
        </button>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <span v-for="(image, index) in images" :key="index" :class="['dot', { active: currentIndex === index }]"
          @click="goToSlide(index)">
        </span>
      </div>
    </div>

    <!-- Section pour les offres de vente -->
    <div
      class="bg-amber-50 w-full text-center py-10 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-light mb-4">
          Masters of light Since 2025
        </h1>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non commodi ad
          at natus dicta placeat eaque quis possimus delectus corporis! Rem ipsam
          ratione veritatis alias dignissimos vitae blanditiis assumenda? Suscipit?
        </p>
      </div>
    </div>


    <section class="py-10 px-4 text-center">
      <h2 class="text-2xl font-semibold mb-8">
        Découvrez nos perles sous divers angles
      </h2>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="flex flex-col items-center w-52 h-60 justify-center group cursor-pointer hover:shadow-lg group-hover:shadow-lg hover:border-gray-300/20 rounded-xl overflow-hidden">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-38 h-38 rounded-full object-cover shadow-md mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg"
          />
          <span class="text-sm font-medium text-gray-700 text-center">
            {{ item.title }}
          </span>
        </div>
      </div>
    </section>

    <!-- Section pour les produits -->
    <div>
      <h3 class="text-md sm:text-3xl text-center my-9 font-semibold italic font-serif text-indigo-700">
        Dreams Pearls <br>
      </h3>

      <h3 class="text-md sm:text-xl text-center my-9 font-semibold italic font-serif">
       Spécialisé dans la fabrication des perles
      </h3>

       <h2 class="text-md sm:text-lg inline-block text-center my-9 font-semibold italic font-serif"></h2>
      <!-- Présentation 1 : image gauche, texte droite -->
      <div class="flex flex-col md:flex-row items-center md:items-stretch px-6">
        <img src="../assets/images/baya/b18.jpg" alt="" class="w-full md:w-1/2 h-64 md:h-auto object-cover  shadow" />
        <div class="w-full bg-indigo-100 md:w-1/2 flex items-center justify-center">
          <div class="text-center md:text-left max-w-md text-gray-800 px-5">
            <p class="text-xl font-lora">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti modi nisi quidem dicta dolorum enim itaque facere, pariatur maiores ratione quibusdam atque eveniet doloribus molestias quia inventore placeat soluta dolore.</p>
            <span class="underline underline-offset-8 text-xl inline-block my-10 hover:text-indigo-500 cursor-pointer">Read more</span>
          </div>
        </div>
      </div>

      <!-- Présentation 2 : image droite, texte gauche -->
      <div class="flex flex-col md:flex-row-reverse items-center md:items-stretch px-6">
        <img src="../assets/images/baya/ba1.jpg" alt="" class="w-full md:w-1/2 h-64 md:h-auto object-cover  shadow" />
        <div class="w-full bg-indigo-100 md:w-1/2 flex items-center justify-center">
          <div class="text-center md:text-left max-w-md text-gray-800 ml-5">
            <!-- <h2 class="text-2xl font-semibold mb-4">Titre Présentation 2</h2> -->
            <p class="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero possimus assumenda adipisci aspernatur laborum, eaque eius totam repellendus alias iure voluptatum fugit praesentium sint ratione recusandae inventore voluptate quae aperiam?</p>
            <span class="underline underline-offset-8 text-xl inline-block my-10 hover:text-indigo-500 cursor-pointer">Read more</span>
          </div>
        </div>
      </div>

      <!-- Présentation 3 : image gauche, texte droite -->
      <div class="flex flex-col md:flex-row items-center md:items-stretch px-6">
        <img src="../assets/images/baya/ba3.jpg" alt="" class="w-full md:w-1/2 h-64 md:h-auto object-cover  shadow" />
        <div class="w-full bg-indigo-100 md:w-1/2 flex items-center justify-center">
          <div class="text-center md:text-left max-w-md text-gray-800 ml-5">
            <!-- <h2 class="text-2xl font-semibold mb-4">Titre Présentation 3</h2> -->
            <p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vitae, voluptates asperiores provident quas, iste sunt ipsa repellat quos, eos aspernatur pariatur cum facere maiores. Expedita impedit reiciendis optio sapiente.</p>
            <span class="underline underline-offset-8 text-xl inline-block my-10 hover:text-indigo-500 cursor-pointer">Read more</span>
          </div>
        </div>
      </div>

      <!-- Présentation 4 : image droite, texte gauche -->
      <div class="flex flex-col md:flex-row-reverse items-center md:items-stretch px-6">
        <img src="../assets/images/baya/ba10.jpg" alt="" class="w-full md:w-1/2 h-64 md:h-auto object-cover  shadow" />
        <div class="w-full bg-indigo-100 md:w-1/2 flex items-center justify-center">
          <div class="text-center md:text-left max-w-md text-gray-800 rounded-tr-lg rounded-br-lg ml-5">
            <!-- <h2 class="text-2xl font-semibold mb-4">Titre Présentation 4</h2> -->
            <p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vitae, voluptates asperiores provident quas, iste sunt ipsa repellat quos, eos aspernatur pariatur cum facere maiores. Expedita impedit reiciendis optio sapiente.</p>
            <span class="underline underline-offset-8 text-xl inline-block my-10 hover:text-indigo-500 cursor-pointer">Read more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section pour les offres de vente -->
    <div class="mx-6">
      <div class="bg-indigo-50 mx-auto text-center py-5 px-2 sm:px-6 md:px-10 lg:px-20 my-5 shadow-2xl rounded-2xl shadow-gray-300">
        <div class="max-w-4xl mx-auto">
          <swiper :slides-per-view="1" loop :autoplay="{ delay: 3000, disableOnInteraction: false }">
            <!-- Slide 1 -->
            <swiper-slide>
              <h1 class="text-2xl text-left sm:text-3xl font-medium mb-6">
                Réduction de <span class="font-extrabold text-red-700">30%</span> sur chaque achat effectué
              </h1>
              <p class="text-sm text-left sm:text-base text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non commodi ad at natus dicta placeat eaque quis possimus delectus corporis! Rem ipsam ratione veritatis alias dignissimos vitae blanditiis assumenda? Suscipit?
              </p>
            </swiper-slide>
            <!-- Slide 2 -->
            <swiper-slide>
              <h1 class="text-2xl text-left sm:text-3xl font-medium mb-6">
                Nouvelle offre exclusive <span class="font-extrabold text-blue-700">50%</span> sur nos produits!
              </h1>
              <p class="text-sm text-left sm:text-base text-gray-700 leading-relaxed mb-6">
                Profitez d'une réduction incroyable sur tous nos articles. Ne ratez pas cette offre limitée!
              </p>
            </swiper-slide>
            <!-- Slide 3 -->
            <swiper-slide>
              <h1 class="text-2xl text-left sm:text-3xl font-medium mb-6">
                Nouvelle offre exclusive <span class="font-extrabold text-green-700">50%</span> sur nos produits!
              </h1>
              <p class="text-sm text-left sm:text-base text-gray-700 leading-relaxed mb-6">
                Profitez d'une réduction incroyable sur tous nos articles. Ne ratez pas cette offre limitée!
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
<!--ProductComponent/> -->
  <FooterComponent />
</template>


<style scoped>
/* Style pour le conteneur du slider */
.slider {
  position: relative;
  width: 100%;
  /* height: 100vh; Hauteur du slider à 100% de la hauteur de la fenêtre */
  overflow: hidden;
}

/* Style de l'image */
.slide-image {
  width: 100%;
  height: 100vw;  /* Garde le ratio d'aspect de l'image */
  object-fit: cover; /* Recouvre le conteneur sans déformation */
}

/* Overlay (couche noire semi-transparente) */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Noir avec une transparence de 50% */
}

/* Transition de fondu pour l'image */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}


/* Style des boutons de navigation (flèches) */
.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 20px;
}

.control-button {
  background: none;
  border: none;
  color: white;
  font-size: 40px; /* Taille des flèches */
  cursor: pointer;
  padding: 10px;
  transition: opacity 0.3s;
}

.control-button:hover {
  opacity: 0.7;
}

/* Style pour la pagination */
.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}

.dot.active {
  background-color: #007BFF;
}

.text-2xl {
  font-size: 1.5rem; /* Par défaut */
}

@media (min-width: 640px) {
  .text-2xl {
    font-size: 2rem; /* Sur les écrans moyens */
  }
}

@media (min-width: 1024px) {
  .text-2xl {
    font-size: 2.5rem; /* Sur les grands écrans */
  }
}

</style>
