<script setup>
// On importe les fonctions nécessaires depuis Vue
import { ref, onMounted } from 'vue'

// On importe Axios pour effectuer des requêtes HTTP
import axios from 'axios'

// produitsParCategorie contiendra les produits groupés par catégorie (ex: Collier, Bracelet...)
const produitsParCategorie = ref({})

// categorieActive stocke la catégorie actuellement sélectionnée (ex: "Collier")
const categorieActive = ref('')

// categorieActive stocke le message de confirmation du message
const confirmationMessage = ref('')

// produitsVisibles garde le nombre de produits affichés pour chaque catégorie (initialement 8)
const produitsVisibles = ref({})

// Nombre de produits affichés par défaut dans chaque catégorie
const produitsMax = 8

// Fonction appelée automatiquement lorsque le composant est monté à l'écran
onMounted(async () => {
  try {
    // Requête GET pour récupérer les produits groupés par catégorie depuis l'API backend
    const res = await axios.get('http://localhost:3000/produits/categorie')

    // On stocke les données retournées dans la variable réactive produitsParCategorie
    produitsParCategorie.value = res.data

    // On récupère la liste des noms de catégories (ex: ["Collier", "Bracelet", ...])
    const categories = Object.keys(res.data)

    // Si des catégories existent, on initialise la première comme étant sélectionnée par défaut
    if (categories.length) {
      categorieActive.value = categories[0]
    }

    // Pour chaque catégorie, on initialise produitsVisibles avec 8 produits visibles par défaut
    for (const cat in res.data) {
      produitsVisibles.value[cat] = produitsMax
    }
  } catch (error) {
    console.error('Erreur de chargement des produits :', error)
  }
})

// Fonction appelée quand on clique sur "Voir plus"
const voirPlus = (categorie) => {
  produitsVisibles.value[categorie] = produitsParCategorie.value[categorie].length
}

// Fonction appelée quand on clique sur une catégorie
const changerCategorie = (categorie) => {
  categorieActive.value = categorie
}

// Fonction pour ajouter un produit au panier stocké dans localStorage
const addProductToCart = (produit) => {
  const panier = JSON.parse(localStorage.getItem('panier')) || []

  // Vérifie si le produit existe déjà dans le panier
  const index = panier.findIndex(item => item.id === produit.id)

  if (index !== -1) {
    // Si déjà dans le panier, on augmente la quantité
    panier[index].quantity += 1
  } else {
    // Sinon, on ajoute le produit avec une quantité de 1
    panier.push({ ...produit, quantity: 1 })
  }

  // Sauvegarde le panier
  localStorage.setItem('panier', JSON.stringify(panier))

  // Affichage du message de succès
    confirmationMessage.value = 'Votre produit a été enregistrée avec succès ! Merci 😊'
    setTimeout(() => {
      confirmationMessage.value = ''
    }, 2000)
}

</script>

<template>
  <div class="p-6 bg-indigo-50 px-4 mt-20">
    <!-- Titre -->
    <h3 class="text-xl sm:text-5xl text-center my-9 font-semibold italic font-serif text-indigo-600">
      Nos Perles
    </h3>

    <!-- Message de succès -->
    <div v-if="confirmationMessage" class="max-w-2xl mx-auto mb-6">
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow" role="alert">
        <strong class="font-bold">Succès ! </strong>
        <span class="block sm:inline">{{ confirmationMessage }}</span>
      </div>
    </div>

    <!-- Navigation Catégories -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="categorie in Object.keys(produitsParCategorie)"
        :key="categorie"
        @click="changerCategorie(categorie)"
        class="px-4 py-2 text-base sm:text-lg text-[#333333] rounded-md hover:text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110"
        :class="categorieActive === categorie
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-slate-100'">
        {{ categorie }}
      </button>
    </div>

    <!-- Grille des produits -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12  max-sm:mx-5 max-xl:mx-20 mx-50 mb-15">
      <div
        v-for="produit in (produitsParCategorie[categorieActive] || []).slice(0, produitsVisibles[categorieActive] || produitsMax)"
        :key="produit.id"
        class="relative group rounded-xl overflow-hidden bg-white shadow transition duration-300 hover:shadow-2xl"
      >
        <!-- Image du produit -->
        <img :src="produit.image_url" alt="Produit" class="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-700" />

        <!-- Prix affiché -->
        <div class="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
          €{{ produit.prix }}
        </div>

        <!-- Bouton Détail au survol -->
        <router-link
          :to="`/produit/${produit.id}`"
          class="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <div class="flex flex-col gap-y-4">
            <button class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-50 hover:text-white">
              Détails
            </button>

          </div>
        </router-link>
        <div class="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button class="bg-white text-orange-400 px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-500 hover:text-white" @click.stop="addProductToCart(produit)">
                Ajouter au panier
            </button>
        </div>
      </div>
    </div>

    <!-- Bouton Voir plus -->
    <div
      v-if="(produitsParCategorie[categorieActive]?.length || 0) > (produitsVisibles[categorieActive] || produitsMax)"
      class="text-center mt-4"
    >
      <button
        @click="voirPlus(categorieActive)"
        class="bg-indigo-600 text-white px-6 py-2 my-10 rounded-full font-semibold hover:bg-indigo-700 transition animate-bounce"
      >
        Voir plus
      </button>
    </div>
  </div>
</template>

<style scoped>
button:hover {
  background-color: rgb(72, 69, 252);
  transform: scale(1.05);
}
</style>
