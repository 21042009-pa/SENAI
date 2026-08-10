const pool = require ("../config/database")

class MovimentacaoEstoqueRepositorie{
    async listarMovimentacaoEstoque(){
        const listaMovimentacaoEstoque = await pool.query('SELECT * FROM movimentacao_estoque')
        return listaMovimentacaoEstoque
    }

    async buscarMovimentacaoEstoqueId(id){
        const mostrarMovimentacaoEstoque = await pool.query('SELECT * FROM movimentacao_estoque WHERE id = ? ', [id])
        return mostrarMovimentacaoEstoque[0]
    }

    async cadastrarMovimentacaoEstoque(dadosDaMovimentacaoEstoque){
        const resultadoMovimentacaoEstoque = await pool.query('INSERT INTO movimentacao_estoque SET ?', [dadosDaMovimentacaoEstoque])
        return resultadoMovimentacaoEstoque.insertId 
    }

    async atualizarMovimentacaoEstoque(id, dadosDaMovimentacaoEstoque){
        const camposMovimentacaoEstoque = []
        const dadoMovimentacaoEstoque = []

        for(const [key, value] of Object.entries(dadosDaMovimentacaoEstoque)){
            camposMovimentacaoEstoque.push(`${key} = ?`)
            dadoMovimentacaoEstoque.push(value)
        }

        if(camposMovimentacaoEstoque.length === 0) return null

        dadoMovimentacaoEstoque.push(id)

        const query = `UPDATE movimentacao_estoque SET ${camposMovimentacaoEstoque.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoMovimentacaoEstoque)

        return resultado.affectedRows
    }


    async apagarMovimentacaoEstoque(id){
        await pool.query ('DELETE * FROM movimentacao_estoque WHERE id = ?', [id])
        return true
    }
}

module.exports = new MovimentacaoEstoqueRepositorie()