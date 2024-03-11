const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario, obtenerUsuarioAutenticado } = require('../controllers/usuariosController');
const { verificarToken, verificarCredenciales } = require('../middlewares/authMiddleware');

router.use((req, res, next) => {
    console.log(`Consulta recibida: ${req.method} ${req.path}`);
    next();
  });
// Rutas
router.post('/usuarios', verificarCredenciales, registrarUsuario);
router.post('/login', loginUsuario);
router.get('/usuarios', verificarToken, obtenerUsuarioAutenticado);

module.exports = router;
