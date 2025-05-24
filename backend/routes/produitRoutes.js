// routes /produitRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/produitController');

//Definir les routes 
router.get('/', productController.getProduits);
router.post('/addproduct', productController.addProduits);
router.get('/categorie', productController.getProduitsParCategorie);
// Route pour récupérer un produit par son ID
router.get('/:id', productController.getProduitParId);

module.exports = router;