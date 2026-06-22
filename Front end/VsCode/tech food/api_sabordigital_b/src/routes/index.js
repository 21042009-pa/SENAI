const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const cardapioRoutes = require('./CardapioRoute');
const pedidoRoutes = require('./pedidoRoute');

// Rota base (Root endpoint que estava em app.js)
router.get('/', (req, res) => {
    res.json({
        mensagem: "API SaborDigital funcionando 🍝",
        versao: "1.0.0",
        arquitetura: "MVC + SOLID (Refatorada)"
    });
});

// Registrar domínios de rotas
router.use('/produtos', produtoRoutes);
router.use('/cardapios', cardapioRoutes);
router.use('/pedidos', pedidoRoutes);

module.exports = router;