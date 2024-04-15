const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const db = admin.firestore();

// Ruta para la página de administrador
router.get('/', (req, res) => {
  // Renderiza la página de administrador
  res.render('admin');
});

// Ruta para agregar un producto (POST)
router.post('/addProduct', async (req, res) => {
  try {
    // Obtener los datos del formulario
    const { productName, productDescription, productPrice, productStock, productImage } = req.body;

    // Guardar el producto en Firebase
    const productsRef = db.collection('products');

    await productsRef.add({
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
      image: productImage,
    });

    // Redirigir a la página de productos
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
