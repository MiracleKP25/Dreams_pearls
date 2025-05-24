<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// On récupère l'ID depuis l'URL
const route = useRoute()
const produitId = route.params.id

// Variable réactive pour stocker les infos du produit
const produit = ref(null)

// Requête HTTP pour récupérer les infos du produit
onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:3000/produits/${produitId}`)
    produit.value = res.data
  } catch (error) {
    console.error('Erreur chargement produit :', error)
  }
})

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

  // Message de confirmation (optionnel)
  alert('Produit ajouté au panier !')
}
</script>

<template>
  <HeaderComponent />

  <!-- Contenu principal -->
  <div class="px-6 py-10 bg-slate-50 min-h-screen">
    <div class="max-w-5xl mx-auto">
      <!-- Lien retour -->
      <router-link to="/" class="text-indigo-600 font-semibold hover:underline text-md inline-flex items-center mb-6 mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-16 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.707a1 1 0 00-1.414-1.414L7.586 10l2.707 2.707a1 1 0 001.414-1.414L10.414 10l1.293-1.293z" clip-rule="evenodd" />
        </svg>
        Retour à l’accueil
      </router-link>

      <!-- Affichage produit -->
      <div v-if="produit" class="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-xl shadow-lg transition-all duration-300">
        <!-- Image produit -->
        <div class="flex-1 overflow-hidden rounded-xl group">
          <img
            :src="produit.image_url"
            alt="Produit"
            class="w-full h-96 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105 shadow-md"
          />
        </div>

        <!-- Informations produit -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">{{ produit.nom }}</h1>
            <p class="text-xl text-indigo-600 font-semibold mb-4">€{{ produit.prix }}</p>
            <p class="text-gray-700 leading-relaxed text-base">{{ produit.description }}</p>
          </div>

          <!-- Bouton ajouter -->
          <button class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow transition transform hover:scale-105 w-full"
           @click.stop="addProductToCart(produit)" >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>
