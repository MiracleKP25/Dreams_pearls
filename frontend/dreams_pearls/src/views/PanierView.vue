<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// État du panier
const panier = ref([])

// Champs du formulaire de commande
const client_nom = ref('')
const client_email = ref('')
const client_number = ref('')
const confirmationMessage = ref('')

// Contrôle du popup
const afficherPopup = ref(false)

// Chargement du panier et du message de succès depuis localStorage
onMounted(() => {
  // Récupération du panier
  const panierLocal = JSON.parse(localStorage.getItem('panier')) || []
  panier.value = panierLocal

  // Affichage du message succès (si défini dans une autre page après ajout)
  const msg = localStorage.getItem('message')
  if (msg) {
    confirmationMessage.value = msg
    setTimeout(() => {
      confirmationMessage.value = ''
    }, 4000)
    localStorage.removeItem('message') // Nettoyage
  }
})

// Supprimer un produit du panier
function supprimerProduit(index) {
  panier.value.splice(index, 1)
  localStorage.setItem('panier', JSON.stringify(panier.value))
}

// Modifier la quantité d’un produit
function changerQuantite(index, event) {
  const qte = parseInt(event.target.value)
  if (qte > 0) {
    panier.value[index].quantity = qte
    localStorage.setItem('panier', JSON.stringify(panier.value))
  }
}

// Calcul du total du panier
const total = () => {
  return panier.value.reduce((acc, p) => {
    const prix = parseFloat(p.prix)
    const quantite = parseInt(p.quantity)
    return acc + (isNaN(prix) || isNaN(quantite) ? 0 : prix * quantite)
  }, 0).toFixed(2)
}

// Envoyer la commande au backend
async function commander() {
  if (!client_nom.value || !client_email.value || !client_number.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  try {
    const produitsFiltres = panier.value.map(p => ({
      nom: p.nom,
      categorie: p.categorie,
      prix: parseFloat(p.prix),
      quantity: parseInt(p.quantity)
    }))

    await axios.post('http://localhost:3000/commande/commande', {
      client_nom: client_nom.value,
      client_email: client_email.value,
      client_number: client_number.value,
      produits: produitsFiltres,
      total_price: parseFloat(total())
    })

    confirmationMessage.value = 'Votre commande a été enregistrée avec succès ! Merci 😊'
    setTimeout(() => confirmationMessage.value = '', 5000)

    panier.value = []
    localStorage.removeItem('panier')
    afficherPopup.value = false

  } catch (err) {
    console.error('Erreur lors de l\'envoi :', err.response?.data || err.message)
    alert('Erreur lors de l\'enregistrement de la commande.')
  }
}

</script>

<template>
  <HeaderComponent/>

  <div class="p-6 mt-20 bg-slate-100 min-h-screen">

    <!-- Message de succès -->
    <div v-if="confirmationMessage" class="max-w-2xl mx-auto mb-6">
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow" role="alert">
        <strong class="font-bold">Succès ! </strong>
        <span class="block sm:inline">{{ confirmationMessage }}</span>
      </div>
    </div>

    <h2 class="text-3xl font-bold text-center mb-10 text-indigo-600">Votre Panier</h2>

    <!-- Liste des produits du panier -->
    <div v-if="panier.length > 0" class="space-y-6 max-w-3xl mx-auto">
      <div v-for="(produit, index) in panier" :key="produit.id"
           class="flex items-center justify-between p-4 bg-white rounded shadow">
        <div class="flex items-center gap-4">
          <img :src="produit.image_url" alt="" class="w-20 h-20 object-cover rounded" />
          <div>
            <h4 class="font-semibold">{{ produit.nom }}</h4>
            <p class="text-gray-600">€{{ produit.prix }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <input type="number" min="1" :value="produit.quantity" @change="changerQuantite(index, $event)">

          <button @click="supprimerProduit(index)">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#000" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676zM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Total -->
      <div class="text-right text-xl font-semibold text-indigo-700">
        Total : €{{ total() }}
      </div>

      <!-- Bouton Commander -->
      <div class="text-center">
        <button @click="afficherPopup = true"
                class="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
          Commander
        </button>
      </div>
    </div>

    <!-- Panier vide -->
    <div v-else class="text-center text-gray-500 mt-20 text-xl">
      Votre panier est vide.
    </div>

    <!-- Popup de commande -->
    <div v-if="afficherPopup" class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md space-y-4">
        <h3 class="text-xl font-bold text-indigo-700">Informations de commande</h3>
        <input v-model="client_nom" placeholder="Nom"
               class="w-full border px-3 py-2 rounded" />
        <input v-model="client_email" placeholder="Email"
               class="w-full border px-3 py-2 rounded" />
        <input v-model="client_number" placeholder="Numéro client"
               class="w-full border px-3 py-2 rounded" />
        <div class="flex justify-end gap-3">
          <button @click="afficherPopup = false" class="text-gray-600 hover:underline">Annuler</button>
          <button @click="commander"
                  class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Envoyer</button>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent/>
</template>
