const express = require('express');
const CarroController = require('../controller/CarsController');

const router = express.Router();

router
    .get('/api/carros', CarroController.List)                 // Lista todos os carros
    .get('/api/carros/:Codigo', CarroController.GetOne)        // Busca um carro específico pelo Código
    .post('/api/carros', CarroController.Create)               // Cria um novo carro
    .put('/api/carros/:Codigo', CarroController.Update)        // Atualiza um carro existente
    .delete('/api/carros/:Codigo', CarroController.Delete) // Deleta um carro pelo Código

module.exports = router;
