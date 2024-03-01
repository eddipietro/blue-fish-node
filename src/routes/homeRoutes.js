const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  // Renderiza la vista llamada 'home' (sin la extensión .ejs)
  res.render('home');
});

module.exports = router;