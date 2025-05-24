// On importe le modèle Commande qui contient la logique d'insertion dans la base de données
const Commande = require('../models/commandeModel');

// On exporte un objet contenant une méthode nommée "createCommande"
// Cette méthode sera utilisée comme fonction de contrôle (controller) dans les routes Express
module.exports = {
  // Fonction asynchrone qui gère la création d'une commande à partir d'une requête HTTP POST
  createCommande: async (req, res) => {

    // On extrait les données envoyées dans le corps de la requête (body)
    const {client_nom, client_email, client_number, total_price, produits } = req.body;

    // On vérifie que tous les champs nécessaires sont présents
    if (!client_nom || !client_email || !client_number || !total_price || !produits) {
      // Si un champ est manquant, on renvoie une réponse HTTP 400 avec un message d'erreur
      return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
      // On appelle la fonction "ajouter" du modèle Commande pour insérer la commande dans la base
      // Comme c'est une promesse, on utilise "await"
      await Commande.ajouter(client_nom, client_email, client_number, total_price, produits);

      // Si tout s'est bien passé, on renvoie une réponse HTTP 201 (créé) avec un message de succès
      res.status(201).json({ message: 'Commande enregistrée avec succès' });
    } catch (err) {
      // En cas d’erreur (ex : problème de base de données), on l'affiche dans la console
      console.error(err);

      // Et on renvoie une réponse HTTP 500 (erreur serveur) avec un message d’erreur
      res.status(500).json({ error: 'Erreur serveur' });
    }
  }
};
