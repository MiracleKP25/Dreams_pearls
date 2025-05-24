// models/produitModel.js

const db = require('../config/db');

// Fonction pour récupérer tous les produits de la table "produits"
const getAllProducts = (callback) => {
    const query = 'SELECT * FROM produits'; // Sélectionner tous les produits dans la table "produits"
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des produits :', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Fonction pour créer un produit dans la base de données
const createProduct = (produit, callback) => {
    const query = `
        INSERT INTO produits 
        (nom, description, prix, quantite, image_url, categorie_id, date_ajout) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Exécuter la requête SQL pour insérer un produit
    db.query(
        query,
        [
            produit.nom,           // Nom du produit
            produit.description,   // Description du produit
            produit.prix,          // Prix du produit
            produit.quantite,      // Quantité disponible
            produit.image_url,     // URL de l'image
            produit.categorie_id,  // ID de la catégorie
            produit.date_ajout     // Date d'ajout
        ],
        (err, results) => {
            if (err) {
                console.error("Erreur lors de l'insertion du produit :", err);
                return callback(err, null); // On retourne l'erreur au contrôleur
            }

            console.log('Produit inséré avec succès ! ID :', results.insertId);
            callback(null, results); // On retourne les résultats
        }
    );
};

// On exporte les fonctions pour les utiliser dans les contrôleurs
module.exports = {
    getAllProducts,
    createProduct
};
