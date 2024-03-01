const express = require('express');
const router = express.Router();

// Ruta para la página de administrador
router.get('/', (req, res) => {
  // Renderiza la página de administrador
  res.render('admin');
});

// Puedes agregar más rutas para la gestión de administradores si es necesario

module.exports = router;