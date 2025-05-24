// connexion au server 

// Importer la bibliothèque 'express' qui permet de créer un serveur web
const express = require('express'); 
const cors = require('cors');
// 'express' est un framework léger pour Node.js qui facilite la création de serveurs web et la gestion des routes HTTP.

// Créer une instance de l'application Express
const app = express(); 
// 'express()' retourne un objet qui représente ton serveur Express.
// Cet objet va être utilisé pour configurer et gérer ton serveur, les routes HTTP, les middlewares, etc.

// Définir une constante 'port' avec la valeur 3000.
const port = 3000; 
// Ce port est le numéro sur lequel ton serveur web va écouter les requêtes HTTP.
// Le port 3000 est souvent utilisé en développement, mais tu peux choisir un autre port si nécessaire.

const connection = require('./config/db') // Importer la connexion à la base donnée 

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Active CORS pour toutes les origines
app.use(cors());

const produitRoutes = require('./routes/produitRoutes');
const commandeRoutes = require('./routes/commandeRoutes');

// Route principale pour les perles
app.use('/produits', produitRoutes);
app.use('/commande', commandeRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend en marche sur http://localhost:${port}`);
});

