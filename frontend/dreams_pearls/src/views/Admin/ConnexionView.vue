<script setup>

</script>

<template>
  <div class="w-1/2 mx-auto my-50 border border-white rounded-xl shadow-2xl shadow-gray-300 p-7">
    <form action="" method="get">
      <h3 class="text-center font-semibold text-3xl font-serif my-5">Connexion</h3>
      <div class="flex flex-col mx-auto gap-2 ">
        <label for="email_uer" class="font-medium text-lg">Email</label>
        <input class="border border-gray-300 p-2.5 rounded-md" type="email" required placeholder="Entrer votre email" name="email_user" id="">
      </div>
      <div class="flex flex-col mx-auto gap-2 mt-4.5">
        <label for="password" class="font-medium text-lg">Mot de passe</label>
        <input class="border border-gray-300 p-2.5 rounded-md" type="password" required placeholder="Mot de passe" name="password_user" id="">
      </div>
      <button class="bg-indigo-400 p-3 my-5 text-center text-white font-medium rounded-md">Se connecter</button>
    </form>
  </div>
</template>

<style scoped>

</style>
