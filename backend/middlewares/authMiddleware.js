const jwt = require('jsonwebtoken');
const pool = require('../utils/db');

const verificarCredenciales = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Credenciales incompletas.' });
    }
    next();
  };

const verificarToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split('Bearer ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Acceso no autorizado.' });
  }
};

module.exports = { verificarToken, verificarCredenciales };
