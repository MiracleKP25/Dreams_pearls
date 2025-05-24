<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <h2>Finaliser la commande</h2>
      <input v-model="numero" placeholder="Numéro de client" />
      <input v-model="email" placeholder="Email" />
      <button @click="valider">Valider</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const numero = ref('')
const email = ref('')

const emit = defineEmits(['valider'])

function valider() {
  if (numero.value && email.value) {
    emit('valider', { numero: numero.value, email: email.value })
  } else {
    alert('Veuillez remplir les champs.')
  }
}
</script>
