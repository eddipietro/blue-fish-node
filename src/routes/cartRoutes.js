// YA ESTAN LAS RUTAS CREADAS EN index.JS PARA LAS VISTAS DE CARTROUTER.JS Y CART.EJS, SOLO FALTACREAR EL CODIGO DE LA FUNCIONALIDAD DEL CART Y LINKEARLA CON HOME Y LOS PRODUCTOS

// src/routes/cartRoutes.js

const express = require('express');
const router = express.Router();

let cartItems = []; // Array para almacenar los elementos del carrito

// Ruta para mostrar el carrito
router.get('/', (req, res) => {
    res.render('cart', { cartItems }); // Renderizar la vista del carrito y pasar los elementos del carrito como datos
});

// Ruta para agregar un producto al carrito
router.post('/add', (req, res) => {
    const { productId, productName, price } = req.body; // Obtener datos del formulario

    // Agregar el producto al carrito
    cartItems.push({
        productId,
        productName,
        price: parseFloat(price),
    });

    res.redirect('/cart'); // Redirigir al usuario de vuelta al carrito
});

module.exports = router;
