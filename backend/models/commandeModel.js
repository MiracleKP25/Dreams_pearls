// models/commandeModel.js

// On importe la configuration de connexion à la base de données MySQL
const db = require('../config/db');

// On définit un objet Commande qui contiendra toutes les fonctions liées aux commandes
const Commande = {

  // Fonction "ajouter" pour insérer une nouvelle commande dans la base de données
  // Elle prend en paramètres : le nom du client, son email, son numéro, le prix total, et les produits commandés
  ajouter: (client_nom, client_email, client_number, total_price, produits) => {

    // On retourne une promesse pour gérer l'opération de manière asynchrone (avec then / catch ou async / await)
    return new Promise((resolve, reject) => {

      // On convertit les produits (tableau ou objet JS) en chaîne JSON pour l'enregistrer dans la base
      const produitsJSON = JSON.stringify(produits);

      // Requête SQL pour insérer les données dans la table "commandes"
      const sql = `
        INSERT INTO commandes (client_nom, client_email, client_number, total_price, produits, date_ajout)
        VALUES (?, ?, ?, ?, ?, NOW())
      `;
      // Les points d'interrogation (?) seront remplacés par les valeurs fournies ci-dessous

      // On exécute la requête avec les valeurs correspondantes
      db.query(sql, [client_nom, client_email, client_number, total_price, produitsJSON], (err, result) => {
        if (err) {
          // En cas d’erreur lors de la requête, on affiche le message d’erreur dans la console
          console.error('Erreur MySQL :', err.message);

          // Et on rejette la promesse avec l'erreur
          reject(err);
        } else {
          // Si tout se passe bien, on résout la promesse avec le résultat de l'insertion
          resolve(result);
        }
      });
    });
  }
};

// On exporte l’objet Commande pour qu’il soit utilisable dans d’autres fichiers (ex : contrôleur)
module.exports = Commande;
