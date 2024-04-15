const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const path = require('path');

const serviceAccount = require('./blue-fish-firebase.json');

// Inicializar Firebase si aún no está inicializado
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuración de las vistas
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Rutas
const adminRoutes = require('./src/routes/adminRoutes');
const productRoutes = require('./src/routes/productRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/', homeRoutes); // Rutas para el home web
app.use('/admin', adminRoutes); // Rutas para el administrador
app.use('/products', productRoutes); // Rutas para los productos
app.use('/cart', cartRoutes); // Rutas para los carritos

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
