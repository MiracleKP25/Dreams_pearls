<script setup>
import {ref} from 'vue';
  const bracelet = [
  { name: 'Expresso', description: 'Un concentré d’intensité pure qui réveille les sens. Ce café audacieux, à la saveur profonde et intense, est la promesse d’un moment de pur plaisir.', price: '€1.50', img: new URL(`@/assets/images/bracelet/bracelet1.jpg`, import.meta.url).href },
  { name: 'Double Espresso', description: 'Deux fois plus de plaisir pour les amateurs de café fort. Un double shot d’intensité qui comblera les plus exigeants avec sa richesse et sa puissance.', price: '€2.20', img: new URL(`@/assets/images/bracelet/bracelet2.jpg`, import.meta.url).href },
  { name: 'Ristretto', description: 'Petit mais costaud ! Ce café court, intense et serré, offre une expérience corsée et raffinée, idéale pour une pause énergisante à toute heure.', price: '€1.60', img: new URL(`@/assets/images/bracelet/b3.jpg`, import.meta.url).href },
  { name: 'Lungo', description: 'Un espresso allongé pour une dégustation plus longue et savoureuse. Sa douceur équilibrée et son goût riche font de ce café un choix parfait pour un moment de détente.', price: '€1.80', img: new URL(`@/assets/images/bracelet/b4.jpg`, import.meta.url).href },
  { name: 'Americano', description: 'Un café allongé, doux et savoureux, qui offre une rondeur en bouche idéale pour les amateurs de café léger et aromatique. Un classique qui ne déçoit jamais.', price: '€2.00', img: new URL(`@/assets/images/bracelet/b5.jpg`, import.meta.url).href },
  { name: 'Café Filtre', description: 'Classique et réconfortant, ce café filtre révèle toute sa richesse aromatique dans une tasse généreuse. Parfait pour les moments de calme ou de convivialité.', price: '€2.20', img: new URL(`@/assets/images/bracelet/b6.jpg`, import.meta.url).href },
  { name: 'Cappuccino', description: 'L’harmonie parfaite entre un espresso riche et une mousse de lait onctueuse. Un équilibre subtil qui offre douceur et caractère dans chaque gorgée.', price: '€2.80', img: new URL(`@/assets/images/bracelet/b7.jpg`, import.meta.url).href },
  { name: 'Latte', description: 'Douceur et onctuosité se mélangent pour créer un café parfaitement crémeux. Un choix idéal pour ceux qui aiment la délicatesse du lait avec une touche d’espresso.', price: '€3.00', img: new URL(`@/assets/images/bracelet/b8.jpg`, import.meta.url).href },
  { name: 'Flat White', description: 'Originaire d’Australie, ce café est une alliance parfaite de lait chaud et d’espresso, créant une texture veloutée et une saveur douce et subtile. Un coup de cœur instantané pour les amateurs de café.', price: '€3.20', img: new URL(`@/assets/images/bracelet/b9.jpg`, import.meta.url).href },
  { name: 'Macchiato', description: 'Un espresso tout juste marqué par une fine couche de mousse de lait, créant une expérience forte mais douce à la fois. Pour ceux qui aiment le café pur avec une légère touche de douceur.', price: '€2.00', img: new URL(`@/assets/images/bracelet/b10.jpg`, import.meta.url).href },
  { name: 'Latte Macchiato', description: 'Superposition parfaite de lait crémeux et d’espresso. Un café élégant, aussi beau à regarder qu’à déguster, idéal pour ceux qui aiment les contrastes de saveurs.', price: '€3.20', img: new URL(`@/assets/images/bracelet/b11.jpg`, import.meta.url).href },
  { name: 'Mocha (Moka)', description: 'L’union parfaite du café intense et du chocolat chaud crémeux. Un véritable délice sucré qui ravira vos papilles, pour une pause gourmande et réconfortante.', price: '€3.50', img: new URL(`@/assets/images/bracelet/b12.jpg`, import.meta.url).href },
  { name: 'Affogato', description: 'Un dessert-café ultra gourmand : une boule de glace vanille plongée dans un espresso chaud. Un mariage parfait entre la douceur du sucre et l’intensité du café.', price: '€3.80', img: new URL(`@/assets/images/bracelet/b13.jpg`, import.meta.url).href },
  { name: 'Café Glacé (Iced Coffee)', description: 'Rafraîchissant et énergisant, ce café glacé est la boisson idéale pour les journées ensoleillées. Il combine la fraîcheur d’un café froid avec la vivacité d’une dose d’énergie.', price: '€3.00', img: new URL(`@/assets/images/bracelet/b14.jpg`, import.meta.url).href },
  { name: 'Cold Brew', description: 'Infusé à froid pendant 12 heures, ce café est doux et riche en saveurs, avec une touche de fraîcheur. Idéal pour les amateurs de café cherchant une alternative plus douce et moins acide.', price: '€3.20', img: new URL(`@/assets/images/bracelet/b15.jpg`, import.meta.url).href },
]


const active = ref('baya')

let collier = [
  { name: 'Crêpes', description: 'Des crêpes dorées à la perfection, nappées de chocolat fondant. Une douceur simple et gourmande qui fond dans la bouche, parfaite pour une petite pause sucrée.', price: '€3.20', img: new URL(`@/assets/images/collier/c1.jpg`, import.meta.url).href },
  { name: 'Tarte Tatin', description: 'Une délicieuse tarte renversée aux pommes caramélisées, sublimée par une pâte feuilletée dorée. Ce dessert réconfortant et sucré est un voyage au cœur de la tradition française.', price: '€4.50', img: new URL(`@/assets/images/collier/c2.jpg`, import.meta.url).href },
  { name: 'Crêpes Suzette', description: 'De fines crêpes flambées avec une sauce à l’orange et au Grand Marnier. Une explosion de saveurs fruitées et alcoolisées, accompagnée d’une touche de flamboyance qui éveille les sens.', price: '€6.00', img: new URL(`@/assets/images/collier/c3.jpg`, import.meta.url).href },
  { name: 'Soufflé au chocolat', description: 'Un dessert aérien et fondant, à la fois léger et riche en chocolat intense. Ce soufflé se gonfle en bouche, offrant une expérience douce et veloutée qui fait fondre de plaisir.', price: '€5.50', img: new URL(`@/assets/images/collier/c4.jpg`, import.meta.url).href },
  { name: 'Tiramisu', description: 'Un dessert italien incontournable, composé de couches moelleuses de biscuits imbibés de café et de crème mascarpone. Doux, sucré et légèrement amer, il offre une texture crémeuse irrésistible.', price: '€4.50', img: new URL(`@/assets/images/collier/c5.jpg`, import.meta.url).href },
  { name: 'Panna Cotta', description: 'Ce dessert italien est une caresse pour le palais : une crème onctueuse, délicatement parfumée à la vanille, qui fond littéralement en bouche. Un équilibre parfait entre douceur et fraîcheur.', price: '€3.80', img: new URL(`@/assets/images/collier/c6.jpg`, import.meta.url).href },
  { name: 'Fondant au chocolat', description: 'Un gâteau au chocolat fondant, avec un cœur coulant de chocolat noir intense. À chaque bouchée, une explosion de saveur qui ravira les amoureux du chocolat et les gourmands.', price: '€5.80', img: new URL(`@/assets/images/collier/c7.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c8.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c9.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c10.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c12.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c13.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c14.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c15.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c16.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c17.jpg`, import.meta.url).href },
  { name: 'Mousse au chocolat', description: 'Une mousse légère, aérienne et riche en chocolat, qui fond sur la langue. Son goût profond et son onctuosité offrent un contraste parfait entre légèreté et intensité.', price: '€4.20', img: new URL(`@/assets/images/collier/c18.jpg`, import.meta.url).href },
]


let boucle = [
  { name: 'Salade', description: 'Une salade fraîche et colorée, composée de légumes croquants et assaisonnée d’une vinaigrette maison. Léger et équilibré, ce plat est idéal pour une pause saine et nourrissante.', price: '€3.20', img: new URL(`@/assets/images/boucle/bo1.jpg`, import.meta.url).href },
  { name: 'Avocat aux œufs', description: 'Un avocat crémeux accompagné d’œufs pochés délicatement cuits. L’alliance parfaite entre la douceur de l’avocat et la richesse des œufs, pour un plat à la fois nourrissant et plein de saveurs.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo2.jpg`, import.meta.url).href },
  { name: 'Œufs brouillés', description: 'Des œufs brouillés crémeux et légers, préparés à la perfection pour offrir une texture onctueuse et un goût délicat. Un classique indémodable pour une pause savoureuse.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo3.jpg`, import.meta.url).href },
  { name: 'Frites', description: 'Des frites maison, dorées à souhait, croustillantes à l’extérieur et tendres à l’intérieur. Un plat simple mais délicieux, parfait pour accompagner vos mets ou à savourer seul.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo4.jpg`, import.meta.url).href },
  { name: 'Alloco au poisson', description: 'Des tranches de banane plantain frites, servies avec un poisson tendre et savoureux. Un mariage délicieux entre la douceur de l’alloco et la fraîcheur du poisson, typique des saveurs africaines.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo5.jpg`, import.meta.url).href },
  { name: 'Spaghettis', description: 'Des spaghettis al dente, accompagnés d’une sauce savoureuse, préparée avec des tomates fraîches, de l’ail et des herbes aromatiques. Un plat italien réconfortant qui saura séduire les amateurs de pâtes.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo6.jpg`, import.meta.url).href },
  { name: 'Viande de porc', description: 'Une viande de porc tendre et juteuse, mijotée à feu doux pour révéler toute sa richesse de saveurs. Accompagnée de légumes frais, elle est parfaite pour une expérience gourmande.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo7.jpg`, import.meta.url).href },
  { name: 'Nouilles', description: 'Des nouilles parfaitement cuites, servies avec une sauce soja légère et des légumes croquants. Un plat simple mais savoureux, qui ravira les amateurs de cuisine asiatique.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo8.jpg`, import.meta.url).href },
  { name: 'Nouilles sautées', description: 'Des nouilles sautées au wok, avec des légumes frais et une sauce légèrement épicée. Un plat savoureux qui mêle la fraîcheur des légumes et l’intensité des saveurs asiatiques.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo9.jpg`, import.meta.url).href },
  { name: 'Nouilles à la sauce cacahuète', description: 'Des nouilles accompagnées d’une sauce crémeuse à la cacahuète, avec un soupçon de piment pour une touche épicée. Un mélange doux et relevé qui plait à tous les palais.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo10.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: 'Des nouilles aux crevettes tendres, sautées avec des légumes frais et une sauce légère mais parfumée. Un plat équilibré, riche en saveurs marines et en textures.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo11.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: 'Des nouilles aux crevettes tendres, sautées avec des légumes frais et une sauce légère mais parfumée. Un plat équilibré, riche en saveurs marines et en textures.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo12.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: 'Des nouilles aux crevettes tendres, sautées avec des légumes frais et une sauce légère mais parfumée. Un plat équilibré, riche en saveurs marines et en textures.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo13.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: 'Des nouilles aux crevettes tendres, sautées avec des légumes frais et une sauce légère mais parfumée. Un plat équilibré, riche en saveurs marines et en textures.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo14.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: 'Des nouilles aux crevettes tendres, sautées avec des légumes frais et une sauce légère mais parfumée. Un plat équilibré, riche en saveurs marines et en textures.', price: '€3.50', img: new URL(`@/assets/images/boucle/bo15.jpg`, import.meta.url).href },
]

let pieds = [
  {
    name: 'Salade',
    description: 'Une salade fraîche et colorée, composée de légumes croquants et assaisonnée d’une vinaigrette maison. Léger et équilibré, ce plat est idéal pour une pause saine et nourrissante.',
    price: '€3.20',
    img: new URL(`@/assets/images/pieds/p1.jpg`, import.meta.url).href
  },
  {
    name: 'Avocat aux œufs',
    description: 'Un avocat crémeux accompagné d’œufs pochés délicatement cuits. L’alliance parfaite entre la douceur de l’avocat et la richesse des œufs, pour un plat à la fois nourrissant et plein de saveurs.',
    price: '€3.50',
    img: new URL(`@/assets/images/pieds/p2.jpg`, import.meta.url).href
  },
  {
    name: 'Œufs brouillés',
    description: 'Des œufs brouillés crémeux et légers, préparés à la perfection pour offrir une texture onctueuse et un goût délicat. Un classique indémodable pour une pause savoureuse.',
    price: '€3.50',
    img: new URL(`@/assets/images/pieds/p3.jpg`, import.meta.url).href
  },
  {
    name: 'Frites',
    description: 'Des frites maison, dorées à souhait, croustillantes à l’extérieur et tendres à l’intérieur. Un plat simple mais délicieux, parfait pour accompagner vos mets ou à savourer seul.',
    price: '€3.50',
    img: new URL(`@/assets/images/pieds/p4.jpg`, import.meta.url).href
  },
  {
    name: 'Alloco au poisson',
    description: 'Des tranches de banane plantain frites, servies avec un poisson tendre et savoureux. Un mariage délicieux entre la douceur de l’alloco et la fraîcheur du poisson, typique des saveurs africaines.',
    price: '€3.50',
    img: new URL(`@/assets/images/pieds/p5.jpg`, import.meta.url).href
  }
];


let baya = [
  { name: 'Salade', description: '...', price: '€3.20', img: new URL(`@/assets/images/baya/ba1.jpg`, import.meta.url).href },
  { name: 'Avocat aux œufs', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba2.jpg`, import.meta.url).href },
  { name: 'Œufs brouillés', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba3.jpg`, import.meta.url).href },
  { name: 'Frites', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba4.jpg`, import.meta.url).href },
  { name: 'Alloco au poisson', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba5.jpg`, import.meta.url).href },
  { name: 'Spaghettis', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba6.jpg`, import.meta.url).href },
  { name: 'Viande de porc', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba7.jpg`, import.meta.url).href },
  { name: 'Nouilles', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba8.jpg`, import.meta.url).href },
  { name: 'Nouilles sautées', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba9.jpg`, import.meta.url).href },
  { name: 'Nouilles à la sauce cacahuète', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba10.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba11.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba12.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba13.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba14.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba15.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba16.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba17.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/b18.jpg`, import.meta.url).href },
  { name: 'Nouilles aux crevettes', description: '...', price: '€3.50', img: new URL(`@/assets/images/baya/ba19.jpg`, import.meta.url).href },
];


const isBraceletExpanded = ref(false)
const isBoucleExpanded = ref(false)
const isBayaExpanded = ref(false)
const isCollierExpanded = ref(false)
const isPiedExpanded = ref(false)

function toggleExpansion(menuType){
  if(menuType === 'bracelet'){
    isBraceletExpanded.value = !isBraceletExpanded.value
  }else if(menuType === 'boucle'){
    isBoucleExpanded.value = !isBoucleExpanded.value
  }else if(menuType === 'collier'){
    isCollierExpanded.value = !isCollierExpanded.value
  }else if(menuType === 'pied'){
    isPiedExpanded.value = !isPiedExpanded.value
  }else if(menuType === 'baya'){
    isBayaExpanded.value = !isBayaExpanded.value
  }
}

//Fonction pour afficher les cartes sur la catégorie active
function showBoucles() {
  active.value = 'boucle'
}

function showBayas() {
  active.value = 'baya'
}

function showColliers() {
  active.value = 'collier'
}
function showPieds() {
  active.value = 'pied'
}

function showBracelets() {
  active.value = 'bracelet'
}
</script>

<template>
  <div class="px-4 mt-20">
    <h3 class="text-xl sm:text-5xl text-center my-9 font-semibold italic font-serif text-indigo-600">
      Nos Perles
    </h3>

    <!-- catégories -->
    <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto my-6">

      <button @click="showBayas" class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110">
        Baya
      </button>
      <button @click="showBracelets" class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110">
        Bracelets
      </button>
      <button @click="showColliers" class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110">
        Collier
      </button>
      <button @click="showBoucles" class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110">
        Boucles d'oreilles
      </button>
      <button @click="showPieds" class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110">
        Perles au pied
      </button>
    </div>
  </div>

  <!-- affichage des produits par produits -->
  <section class="py-16 bg-gradient-to-br from-indigo-50 to-indigo-100">
    <div class="container mx-auto px-6">
      <!-- Cartes baya -->
      <div v-if="active === 'baya'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div v-for="item in (isBayaExpanded ? baya : baya.slice(0, 8))" :key="item.name" class="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
          <div class="relative">
            <img :src="item.img" alt="baya" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">{{ item.price }}</div>
          </div>
          <!-- <div class="p-6">
            <h3 class="text-2xl font-bold text-brown-700 mb-2">{{ item.name }}</h3>
            <p class="text-gray-600 text-base leading-relaxed">{{ item.description }}</p>
          </div> -->
        </div>
      </div>

      <!-- Voir plus pour le baya -->
      <div class="flex justify-center my-9">
        <button
          v-if="active === 'baya' && baya.length > 8"
          @click="toggleExpansion('baya')"
          class="px-6 py-3 bg-indigo-500 text-white rounded-full font-serif my-5 shadow-lg hover:bg-indigo-800 transition-all duration-300 animate-bounce"
        >
          {{ isBayaExpanded ? 'Voir moins' : 'Voir plus' }}
        </button>
      </div>


      <!-- Cartes Colliers -->
      <div v-if="active === 'collier'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div v-for="col in (isCollierExpanded ? collier : collier.slice(0, 8))" :key="col.name" class="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
          <div class="relative">
            <img :src="col.img" alt="Résistant" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">{{ col.price }}</div>
          </div>
          <!-- <div class="p-6">
            <h3 class="text-2xl font-bold text-brown-700 mb-2">{{ col.name }}</h3>
            <p class="text-gray-600 text-base leading-relaxed">{{ col.description }}</p>
          </div> -->
        </div>
      </div>

      <!-- Voir plus pour les collier -->
      <div class="flex justify-center my-9">
        <button
          v-if="active === 'collier' && collier.length > 8"
          @click="toggleExpansion('collier')"
          class="px-6 py-3 bg-indigo-500 text-white rounded-full font-serif shadow-lg hover:bg-[#6F4F37] transition-all duration-300 animate-bounce"
        >
          {{ isCollierExpanded ? 'Voir moins' : 'Voir plus' }}
        </button>
      </div>


  <!-- Cartes Bracelet -->
  <div v-if="active === 'bracelet'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
    <div v-for="bra in (isBraceletExpanded ? bracelet : bracelet.slice(0, 8))" :key="bra.name" class="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
      <div class="relative">
        <img :src="bra.img" alt="Dessert" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">{{ bra.price }}</div>
      </div>
      <!-- <div class="p-6">
        <h3 class="text-2xl font-bold text-brown-700 mb-2">{{ bra.name }}</h3>
        <p class="text-gray-600 text-base leading-relaxed">{{ bra.description }}</p>
      </div> -->
    </div>
  </div>

  <!-- Voir plus pour les bracelets -->
  <div class="flex justify-center my-9">
    <button
      v-if="active === 'bracelet' && bracelet.length > 8"
      @click="toggleExpansion('bracelet')"
      class="px-6 py-3 bg-indigo-500 text-white rounded-full font-serif shadow-lg hover:bg-[#6F4F37] transition-all duration-300 animate-bounce"
    >
      {{ isDessertExpanded ? 'Voir moins' : 'Voir plus' }}
    </button>
  </div>


  <!-- Cartes pieds -->
  <div v-if="active === 'pied'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
    <div v-for="pied in (isPiedExpanded ? pieds : pieds.slice(0, 8))" :key="pied.name" class="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
      <div class="relative">
        <img :src="pied.img" alt="Dessert" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">{{ pied.price }}</div>
      </div>
      <!-- <div class="p-6">
        <h3 class="text-2xl font-bold text-brown-700 mb-2">{{ pied.name }}</h3>
        <p class="text-gray-600 text-base leading-relaxed">{{ pied.description }}</p>
      </div> -->
    </div>
  </div>

  <!-- Voir plus pour les pieds -->
  <div class="flex justify-center my-9">
    <button
      v-if="active === 'dessert' && pieds.length > 8"
      @click="toggleExpansion('pied')"
      class="px-6 py-3 bg-indigo-500 text-white rounded-full font-serif shadow-lg hover:bg-[#6F4F37] transition-all duration-300 animate-bounce"
    >
      {{ isPiedExpanded ? 'Voir moins' : 'Voir plus' }}
    </button>
  </div>

  <!-- Cartes Boucles -->
    <div v-if="active === 'boucle'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
    <div v-for="boule in (isBoucleExpanded ? boucle : boucle.slice(0, 8))" :key="boule.name" class="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
      <div class="relative">
        <img :src="boule.img" alt="Dessert" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">{{ boule.price }}</div>
      </div>
      <!-- <div class="p-6">
        <h3 class="text-2xl font-bold text-brown-700 mb-2">{{ boule.name }}</h3>
        <p class="text-gray-600 text-base leading-relaxed">{{ boule.description }}</p>
      </div> -->
    </div>
  </div>

  <!-- Voir plus pour les boucles -->
  <div class="flex justify-center my-9">
    <button
      v-if="active === 'boucle' && boucle.length > 8"
      @click="toggleExpansion('boucle')"
      class="px-6 py-3 bg-indigo-500 text-white rounded-full font-serif shadow-lg hover:bg-[#6F4F37] transition-all duration-300 animate-bounce"
    >
      {{ isBoucleExpanded ? 'Voir moins' : 'Voir plus' }}
    </button>
  </div>

    </div>


  </section>
</template>

<style scoped>

</style>
