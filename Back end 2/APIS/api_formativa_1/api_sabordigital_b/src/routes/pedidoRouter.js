const express = require('express')
const router = express.Router()
const PedidoController = require('../controllers/PedidoController')

router.get('/', PedidoController.listarPedidos)
router.get('/:id', PedidoController.buscarPedidoPorId)
router.post('/', PedidoController.cadastrarPedido)
router.put('/:id', PedidoController.atualizarPedido)
router.delete('/:id', PedidoController.deletarPedido)

module.exports = router