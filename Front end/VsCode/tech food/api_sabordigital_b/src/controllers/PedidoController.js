const PedidoService = require ('../services/PedidoService')

class PedidoController{
    async listarPedidos (req,res){
        try {
            const resultado = await PedidoService.listarPedidos()
            res.json(resultado)

        } catch (erro) {
            res.status (erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'erro interno do servidor',
                erro: erro.stack || erro
            })
            
        }
    }

    async buscarPedidoPorId(req,res){
        try {
            const resultado = await PedidoService.buscarPedidoPorId(req.params.id)
            res.json(resultado)
            
        } catch (erro) {
            res.status (erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'erro interno do servidor',
                erro: erro.stack || erro
            })
        }
    }

    async cadastrarPedidos(req, res){
        try {
            const resultado = await PedidoService.cadastrarPedidos(req.body)
            res.json(resultado)
        } catch (erro) {
            res.status (erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'erro interno do servidor',
                erro: erro.stack || erro
            })
        }
    }

    async atualizarPedidos(req, res){
        try {
            const resultado = await PedidoService.atualizarPedidos(req.params.id, req.body)
            res.json(resultado)
        } catch (erro) {
            res.status (erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'erro interno do servidor',
                erro: erro.stack || erro
            })
        }
    }

    async deletarPedidos(req, res){
        try {
            const resultado = await PedidoService.deletarPedidos(req.params.id)
            res.json(resultado)
        } catch (erro) {
            res.status (erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'erro interno do servidor',
                erro: erro.stack || erro
            }) 
        }
    }
}

module.exports = new PedidoController()