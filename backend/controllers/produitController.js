// controllers/productController.js

// On importe le modèle "ProduitModel" qui contient les fonctions liées à la base de données
const ProduitModel = require('../models/produitsModel');
const db = require('../config/db'); // ou le bon chemin vers ta base

// Route GET /produits : permet de récupérer la liste de tous les produits
const getProduits = (req, res) => {
    ProduitModel.getAllProducts((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.json(results);
    });
};

// Route POST /produits : permet d'ajouter un nouveau produit
const addProduits = (req, res) => {
    const { nom, description, prix, quantite, image_url, categorie_id, date_ajout } = req.body;

    // Vérifie que tous les champs obligatoires sont bien fournis
    if (!nom || !description || prix == null || quantite == null || !image_url || !categorie_id || !date_ajout) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    // Vérification des types de données
    if (isNaN(prix) || isNaN(quantite) || isNaN(categorie_id)) {
        return res.status(400).json({ error: 'prix, quantite et categorie_id doivent être des nombres' });
    }

    const produit = { nom, description, prix, quantite, image_url, categorie_id, date_ajout };

    ProduitModel.createProduct(produit, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l\'insertion' });
        }
        res.status(201).json({ message: 'Produit ajouté avec succès', id: results.insertId });
    });
};

// Route GET /produits/categorie : retourne tous les produits groupés par nom de catégorie
const getProduitsParCategorie = (req, res) => {
    const sql = `
        SELECT p.*, c.nom AS categories
        FROM produits p
        JOIN categories c ON p.categorie_id = c.id
    `;

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erreur lors de la récupération' });

        const produitsParCategorie = {};

        result.forEach(prod => {
            const nomCategorie = prod.categories;
            if (!produitsParCategorie[nomCategorie]) {
                produitsParCategorie[nomCategorie] = [];
            }
            produitsParCategorie[nomCategorie].push(prod);
        });

        res.json(produitsParCategorie);
    });
};

// Route GET /produits/:id : retourne un produit précis par son ID
const getProduitParId = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM produits WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erreur MySQL :', err);
            return res.status(500).json({ erreur: 'Erreur serveur' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }

        res.json(result[0]);
    });
};

// On exporte les fonctions pour pouvoir les utiliser dans les routes
module.exports = {
    getProduits,
    addProduits,
    getProduitsParCategorie,
    getProduitParId
};
