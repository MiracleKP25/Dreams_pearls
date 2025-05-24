// On importe le module Express
const express = require('express');

// On crée un nouvel objet "router" fourni par Express pour définir les routes de manière modulaire
const router = express.Router();

// On importe le contrôleur des commandes qui contient la logique métier (ex : createCommande)
const commandeController = require('../controllers/commandeController');

// Définition de la route POST "/commande"
// Lorsqu'une requête POST est envoyée à /commande, Express appelle la fonction "createCommande" du contrôleur
router.post('/commande', commandeController.createCommande);

// On exporte le router pour pouvoir l’utiliser dans le fichier principal (ex : app.js ou server.js)
module.exports = router;
