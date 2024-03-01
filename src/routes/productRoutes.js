const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const db = admin.firestore();

// Ruta para la página de productos
router.get('/', async (req, res) => {
  try {
    // Obtener productos de la base de datos
    const products = await db.collection('products').get();
    const productList = products.docs.map((doc) => doc.data());

    // Renderiza la página de productos con la lista
    res.render('products', { products: productList });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Puedes agregar más rutas para la gestión de productos si es necesario

module.exports = router;