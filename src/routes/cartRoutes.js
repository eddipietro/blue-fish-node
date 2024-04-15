const express = require('express');
const router = express.Router();
const { db } = require('../../firebase');

// Ruta POST para agregar un producto al carrito
router.post('/add', async (req, res) => {
    try {
        const { productId, productName, price, quantity } = req.body;
        const totalPrice = price * quantity;

        // Verificar si el producto ya está en el carrito
        const cartItemRef = await db.collection('cart').where('productId', '==', productId).limit(1).get();
        if (!cartItemRef.empty) {
            // Actualizar la cantidad y el precio total si el producto ya está en el carrito
            const existingCartItem = cartItemRef.docs[0];
            await existingCartItem.ref.update({
                quantity: existingCartItem.data().quantity + quantity,
                totalPrice: existingCartItem.data().totalPrice + totalPrice
            });
        } else {
            // Agregar el nuevo producto al carrito si no está presente
            await db.collection('cart').add({
                productId,
                productName,
                price,
                quantity,
                totalPrice
            });
        }
        res.redirect('/cart'); // Redirigir al usuario de vuelta al carrito
        
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
