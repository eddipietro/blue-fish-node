const admin = require("firebase-admin");

const serviceAccount = require("./blue-fish-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});





console.info('FIREBASE CONNECTED');
function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productStock = parseInt(document.getElementById('productStock').value);
    const productImage = document.getElementById('productImage').value;


const CRUD = async () => {
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
CRUD();
}
