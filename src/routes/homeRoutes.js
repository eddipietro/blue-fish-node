const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// Ruta para la página de inicio
router.get('/', async (req, res) => {
  try {
    // Obtener productos de la base de datos
    const products = await db.collection('products').get();
    const productList = products.docs.map((doc) => doc.data());

    // Renderiza la página de inicio con la lista de productos
    res.render('home', { products: productList });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
