const express = require('express');
const router = express.Router();
const produtoRoutes = require('./ProdutoRouter');

router.use('/api/produtos', produtoRoutes);

module.exports = router;
