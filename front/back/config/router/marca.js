
const express = require('express');
const MarcaController = require('../controller/MarcaController');

const router = express.Router();

router
    .get('/api/marcas', MarcaController.List)                  // Lista todas as marcas
    .get('/api/marcas/:CodigoMarca', MarcaController.GetOne)    // Busca uma marca específica pelo CódigoMarca
    .post('/api/marcas', MarcaController.Create)               // Cria uma nova marca
    .put('/api/marcas/:CodigoMarca', MarcaController.Update)    // Atualiza uma marca existente
    .delete('/api/marcas/:CodigoMarca', MarcaController.Delete) // Deleta uma marca pelo CódigoMarca

module.exports = router;

