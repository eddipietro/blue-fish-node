function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productStock = parseInt(document.getElementById('productStock').value);
    const productImage = document.getElementById('productImage').value;

    // Validaciones adicionales pueden agregarse aquí

    // Guardar el producto en Firebase
    const db = firebase.firestore();
    const productsRef = db.collection('products');

    productsRef.add({
        name: productName,
        description: productDescription,
        price: productPrice,
        stock: productStock,
        image: productImage,
    })
    .then(() => {
        alert('Producto agregado exitosamente');
        // Puedes realizar acciones adicionales después de agregar el producto
    })
    .catch((error) => {
        console.error('Error al agregar el producto:', error);
        alert('Error al agregar el producto. Consulta la consola para más detalles.');
    });
}
