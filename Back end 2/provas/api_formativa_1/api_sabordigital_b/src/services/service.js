const ProdutoRepository = require ('../repositories/produtorepositorie')

class ProdutoService{
    async listarProdutos(){
        const produtos = await ProdutoRepository.listarProdutos()
        return{
            sucesso: true,
            dados: produtos,
            total: produtos.length
        }
    }

    async buscarProdutoId(id){
        if(!id || isNaN(id)){
            throw{ status: 400,
                mensagem: 'id inválido'
            }

        }
        const produto = await ProdutoRepository.buscarProdutoId(id)

        if(!produto){
            throw{
                status: 404,
                mensagem: 'produto não encontrado'
            }
        }
        return {
            sucesso: true,
            dados: produto[0]

        }
    }

}