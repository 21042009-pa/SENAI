const ProdutoRepository = require('../repositories/produtorepositorie')

class ProdutoService {
    async listarProdutos() {
        // O repositório devolve [linhas, metadados]
        const resultado = await ProdutoRepository.listarProdutos() 
        
        // Pegamos apenas a posição 0, que são os produtos reais
        const produtos = resultado[0] 

        return {
            sucesso: true,
            dados: produtos,
            total: produtos.length
        }
    }

    async buscarProdutoPorId(id) {
        if (!id || isNaN(id)) {
            throw { 
                status: 400,
                mensagem: 'id inválido'
            }
        }

        const produto = await ProdutoRepository.buscarProdutoId(id)

        if (!produto || produto.length === 0) {
            throw {
                status: 404,
                mensagem: 'produto não encontrado'
            }
        }

        return {
            sucesso: true,
            dados: produto[0]
        }
    }

    async cadastrarProduto(dados) {
        // Recebe precoInput do body e depois converte para preco (número)
        const { nome, descricao, preco: precoInput, categoria, disponivel, imagem } = dados
        const preco = Number(precoInput)

        if (!nome || !descricao || precoInput === undefined) {
            throw {
                status: 400,
                mensagem: "Nome, descrição e preço são obrigatórios"
            }
        }

        if (isNaN(preco) || preco <= 0) {
            throw {
                status: 400,
                mensagem: "O preço deve ser um número positivo válido"
            }
        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco,
            categoria: categoria || null,
            disponivel: disponivel !== undefined ? disponivel : true,
            imagem: imagem || null
        }

        const resultado = await ProdutoRepository.cadastrarProduto(novoProduto)
        
        return {
            sucesso: true,
            mensagem: 'Produto cadastrado com sucesso.',
            resultado
        }
    }

    async atualizarProduto(id, dados) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: 'ID inválido.'
            }
        }

        // Alterado de buscarProdutoPorId para buscarProdutoId
        const produtoId = await ProdutoRepository.buscarProdutoId(id)

        if (!produtoId) {
            throw {
                status: 404,
                mensagem: 'Produto não encontrado.'
            }
        }

        const produtoAtualizado = {}
        const { nome, descricao, preco, categoria, disponivel, imagem } = dados

        if (nome !== undefined && nome.trim() !== '') produtoAtualizado.nome = nome.trim()
        if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        
        if (preco !== undefined) {
            if (typeof preco !== 'number' || preco <= 0) {
                throw {
                    status: 400,
                    mensagem: `preco deve ser um número positivo`
                }
            }
            produtoAtualizado.preco = preco
        }

        if (categoria !== undefined) produtoAtualizado.categoria = categoria
        if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel
        if (imagem !== undefined) produtoAtualizado.imagem = imagem

        if (Object.keys(produtoAtualizado).length === 0) {
            throw {
                status: 400,
                mensagem: 'nenhum dado válido enviado para atualização'
            }
        }

        await ProdutoRepository.atualizarProduto(id, produtoAtualizado)

        return {
            sucesso: true,
            mensagem: 'produto atualizado'
        }
    }

    async deletarProduto(id) {
        // Corrigido de "id" para "!id"
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: 'id inválido'
            }
        }

        // Alterado de buscarProdutoPorId para buscarProdutoId
        const idProduto = await ProdutoRepository.buscarProdutoId(id)

        if (!idProduto) {
            throw {
                status: 404,
                mensagem: 'produto não encontrado'
            }
        }

        await ProdutoRepository.apagarProduto(id)

        return {
            sucesso: true,
            mensagem: 'produto apagado'
        }
    }
}

module.exports = new ProdutoService()