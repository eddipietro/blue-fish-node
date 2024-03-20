const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const firebase = require('firebase/app');
require('firebase/firestore');
const db = admin.firestore();

// Ruta para la página de productos


router.get('/', async (req, res) => {
  try {
    const products = await db.collection('products').get();
    const productList = products.docs.map((doc) => doc.data());
    res.render('home', { products: productList }); // Pasar los datos de los productos a la vista de home
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Puedes agregar más rutas para la gestión de productos si es necesario

module.exports = router;