<template>
  <!-- Footer principal avec fond noir -->
  <footer class="bg-black text-white py-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

      <!-- Section "À propos" -->
      <div class="flex flex-col space-y-4 md:w-1/4">
        <h3 class="text-xl font-bold">Dreams Pearls</h3>
        <p class="text-gray-400">
          Nous vous apportons des bijoux exceptionnels, faits à la main avec amour.
          Découvrez notre collection et laissez-vous séduire.
        </p>
        <div class="flex space-x-4 mt-6">
          <!-- Icônes des réseaux sociaux -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#ddd" d="M8 1C4.13 1 1 4.15 1 8.04c0 3.51 2.56 6.43 5.91 6.96v-4.92H5.13V8.04h1.78V6.49c0-1.77 1.05-2.74 2.64-2.74c.77 0 1.57.14 1.57.14v1.73h-.88c-.87 0-1.14.54-1.14 1.1v1.32h1.94l-.31 2.04H9.1V15c3.35-.53 5.91-3.44 5.91-6.96c0-3.89-3.13-7.04-7-7.04Z" stroke-width="0.5" stroke="#ddd"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ddd" d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845c0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713a4.54 4.54 0 0 0 1.99-2.5a9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03a4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428a4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135a9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016" stroke-width="0.5" stroke="#ddd"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="17" cy="7" r="1.5" fill="#ddd" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/></circle><g fill="none" stroke="#ddd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/></path></g></svg>
          </a>
        </div>
      </div>

      <!-- Section Liens utiles -->
      <div class="flex flex-col space-y-4 md:w-1/4">
        <h3 class="text-xl font-bold">Liens utiles</h3>
        <ul class="space-y-2">
          <li><a href="/" class="hover:text-indigo-500 transition duration-300">Accueil</a></li>
          <li><a href="/about" class="hover:text-indigo-500 transition duration-300">À propos de nous</a></li>
          <li><a href="/produit" class="hover:text-indigo-500 transition duration-300">Nos produits</a></li>
          <li><a href="/contact" class="hover:text-indigo-500 transition duration-300">Contactez-nous</a></li>
        </ul>
      </div>

      <!-- Section Contact -->
      <div class="flex flex-col space-y-4 md:w-1/4">
        <h3 class="text-xl font-bold">Contactez-nous</h3>
        <p class="text-gray-400">Email : <a href="mailto:support@dreamspearls.com" class="hover:text-white transition duration-300">contact@dreamspearls.com</a></p>
        <p class="text-gray-400">Téléphone : <span class="text-white">+229 01 54 67 16 65</span></p>
      </div>

      <!-- Section Newsletter avec input group et bouton -->
      <div class="flex flex-col space-y-4 md:w-1/4">
        <h3 class="text-xl font-bold text-white">Newsletter</h3>
        <p class="text-gray-400">Inscrivez-vous pour recevoir nos dernières offres et nouveautés.</p>
        <form class="flex items-center space-x-2">
          <!-- Input group pour l'email -->
          <input
            type="email"
            placeholder="Votre email"
            class="px-4 py-2 w-full rounded-l-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <!-- Bouton d'abonnement avec icône -->
          <button
            type="submit"
            class="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-600 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#ddd" d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-5 7h-2v2h-2v-2H9v-2h2v-2h2v2h2Z" stroke-width="0.5" stroke="#ddd"/>
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Section bas de page avec copyright -->
    <div class="mt-8 text-center text-gray-400 text-sm">
      <p>&copy; 2025 Dreams Pearls. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Ajouter une légère ombre portée à la section du footer pour un effet élégant */
footer {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
