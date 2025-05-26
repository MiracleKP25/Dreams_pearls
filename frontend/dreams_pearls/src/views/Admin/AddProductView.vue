<script setup>
// Importations
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Champs du formulaire
const nom = ref('')
const description = ref('')
const prix = ref(0)
const quantite = ref(0)
const image_url = ref('')
const categorie_id = ref('')
const categories = ref([]) // Liste des catégories (à charger)

// Message de confirmation
const message = ref('')

// Récupérer les catégories disponibles depuis l'API
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/categories')
    categories.value = res.data
  } catch (err) {
    console.error('Erreur lors du chargement des catégories :', err)
  }
})

// Fonction pour soumettre le produit
const ajouterProduit = async () => {
  try {
    // Construction de l'objet produit
    const produit = {
      nom: nom.value,
      description: description.value,
      prix: prix.value,
      quantite: quantite.value,
      image_url: image_url.value,
      categorie_id: categorie_id.value,
      date_ajout: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
    }

    // Requête POST vers le backend
    await axios.post('http://localhost:3000/produits', produit)

    // Message de succès
    message.value = 'Produit ajouté avec succès ! 🎉'

    // Réinitialiser les champs
    nom.value = ''
    description.value = ''
    prix.value = 0
    quantite.value = 0
    image_url.value = ''
    categorie_id.value = ''
  } catch (err) {
    console.error('Erreur lors de l\'ajout du produit :', err)
  }
}
</script>
<template>
  <div class="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
    <!-- Titre -->
    <h2 class="text-2xl font-bold text-indigo-600 mb-6 text-center">Ajouter un nouveau produit</h2>

    <!-- Message de confirmation -->
    <div v-if="message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      {{ message }}
    </div>

    <!-- Formulaire -->
    <form @submit.prevent="ajouterProduit" class="space-y-4">
      <!-- Champ nom -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Nom</label>
        <input v-model="nom" type="text" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200" />
      </div>

      <!-- Champ description -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Description</label>
        <textarea v-model="description" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"></textarea>
      </div>

      <!-- Champ prix -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Prix (€)</label>
        <input v-model.number="prix" type="number" min="0" step="0.01" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200" />
      </div>

      <!-- Champ quantité -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Quantité</label>
        <input v-model.number="quantite" type="number" min="0" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200" />
      </div>

      <!-- Champ image URL -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Image (URL)</label>
        <input v-model="image_url" type="text" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200" />
        <!-- 🔥 Option : tu peux plus tard gérer l'upload d'image avec un champ de type "file" -->
      </div>

      <!-- Sélecteur de catégorie -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Catégorie</label>
        <select v-model="categorie_id" required class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200">
          <option disabled value="">-- Choisir une catégorie --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.nom }}
          </option>
        </select>
      </div>

      <!-- Bouton -->
      <div class="text-center">
        <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
          Ajouter le produit
        </button>
      </div>
    </form>
  </div>
</template>
