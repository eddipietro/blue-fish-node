const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// Ruta para la página de inicio
router.get('/', async (req, res) => {
  try {
    // Obtener productos de la base de datos
    const productsSnapshot = await db.collection('products').get();
    const products = productsSnapshot.docs.map(doc => doc.data());
    res.render('home', { products }); // Pasar los datos de los productos a la vista home
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
