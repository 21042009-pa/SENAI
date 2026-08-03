const pool= require ("../config/database")

class FornecedorRepositorie{
    async listarFornecedor(){
        const listaFornecedor = await pool.query('SELECT * FROM fornecedor')
        return listaFornecedor
    }

    async buscarFornecedorId(id){
        const mostrarFornecedor = await pool.query('SELECT * FROM fornecedor WHERE id=?', [id])
        return mostrarFornecedor[0]
    }

    async cadastrarFornecedor(dadosDoFornecedor){
        const resultadoFornecedor = await pool.query('INSERT INTO fornecedor SET ?', [dadosDoFornecedor])
        return resultadoFornecedor.insertId 
    }

    async atualizarForenecedor(id, dadosDoFornecedor){
        const camposFornecedor=[]
        const dadoFornecedor=[]
        
        for(const [ key, value] of Object.entries(dadoFornecedor)){
            camposFornecedor.push(`${key} = ?`)
            dadoFornecedor.push(value)
        }

        if(camposFornecedor.length === 0)return null

        dadoFornecedor.push(id)

        const query = `UPDATE fornecedor SET ${camposFornecedor.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoFornecedor)

        return resultado.affectedRows
    }

    async apagarFornecedor(id){
        await pool.query ('DELETE * FROM fornecedor WHERE id = ?', [id])
        return true
    }
}

module.exports = new FornecedorRepositorie()