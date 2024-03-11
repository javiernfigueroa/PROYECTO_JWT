const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuariosRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', usuariosRoutes);

app.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));