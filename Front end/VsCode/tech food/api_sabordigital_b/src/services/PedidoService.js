const PedidoRepository = require ('../repositories/PedidoRepository')

class PedidoService{
    async listarPedidos(){
        const pedidos = await PedidoRepository.listarPedidos()
        return{
            sucesso: true,
            dados: pedidos,
            total: pedidos.length
        }
    }

    async buscarPedidoPorId(id){
        if(!id || isNaN(id)){
            throw{ status: 400,
                mensagem: 'id inválido'
            }

        }
        const pedido = await PedidoRepository.buscarPedidoPorId(id)

        if(!pedido){
            throw{
                status: 404,
                mensagem: 'pedido não encontrado'
            }
        }
        return {
            sucesso: true,
            dados: pedido[0]

        }
    }

    async cadastrarPedido(dados){
        const {cliente, status, total, criado_em, atualizado_em} = dados

        if(!cliente || !total === undefined){
            throw{
                status: 400,
                mensagem: "Cliente e total são obrigatórios"
            }
        }

        if(typeof total !== 'number' || total <= 0){
            throw{
                status: 400,
                mensagem: 'total deve ser um número positivo'
            }
        }

        const novoPedido ={
            cliente: cliente.trim(),
            status: status.trim(),
            total,
            criado_em: criado_em || null,
            atualizado_em: atualizado_em || true
        }

        const resultado = await PedidoRepository.cadastrarPedido(novoPedido)
        return{
            sucesso: true,
            mensagem: 'Pedido cadastrado com sucesso.',
            resultado
        }
    }

    async atualizarPedido(id, dados){
        if(!id || isNaN(id)){
            throw{
                status: 400, //quando não é fornecido.
                mensagem: 'ID inválido.'
            }
        }

        const pedidoId = await PedidoRepository.buscarPedidoPorId(id)

        if(!pedidoId){
            throw{
                status: 404, //quando não existe, não é encontrado.
                mensagem: 'Pedido não encontrado.'
            }
        }

        const pedidoAtualizado = {}
        const {cliente, status, total, criado_em, atualizado_em} = dados

        if(cliente !== undefined || cliente.trim() !== '') pedidoAtualizado.cliente = cliente.trim()
            
        if(status !== undefined) pedidoAtualizado.status = status.trim()
        
        if(total !== undefined){
            if(typeof total !== 'number' || total <=0){
                throw{
                    status: 400,
                    mensagem: 'total deve ser um número positivo'
                }
            }
            pedidoAtualizado.total = total
        }

        if(criado_em !== undefined) pedidoAtualizado.criado_em = criado_em
        if(atualizado_em !== undefined) pedidoAtualizado.atualizado_em = atualizado_em
        

        if(Object.keys(pedidoAtualizado).length === 0){
            throw{
                status: 400,
                mensagem: 'nenhum dado válido enviado para atualização'
            }
        }

        await PedidoRepository.atualizarPedido(id, pedidoAtualizado)

        return{
            sucesso: true,
            mensagem: 'pedido atualizado'
        }

    }

    async deletarPedido (id){
        if(id || isNaN(id)){
            throw{
                status: 400,
                mensagem: 'id inválido'
            }
        }

        const idPedido = await PedidoRepository.buscarPedidoPorId(id)

        if(!idPedido){
            throw{
                status: 404,
                mensagem: 'pedido não encontrado'
            }
        }

        await PedidoRepository.apagarPedido(id)

        return{
            sucesso: true,
            mensagem: 'pedido apagado'
        }
    }

}

module.exports = new PedidoService()