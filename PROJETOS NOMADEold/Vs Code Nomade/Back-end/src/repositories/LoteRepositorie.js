const pool = require ("../config/database")

class LoteRepositorie{
    async listarLote(){
        const listaLote = await pool.query('SELECT * FROM lote')
        return listaLote
    }

    async buscarLoteId(id){
        const mostrarLote = await pool.query('SELECT * FROM lote WHERE id = ? ', [id])
        return mostrarLote[0]
    }

    async cadastrarLote(dadosDoLote){
        const resultadoLote = await pool.query('INSERT INTO lote SET ?', [dadosDoLote])
        return resultadoLote.insertId 
    }

    async atualizarLote(id, dadosDoLote){
        const camposLote = []
        const dadoLote = []

        for(const [key, value] of Object.entries(dadosDoLote)){
            camposLote.push(`${key} = ?`)
            dadoLote.push(value)
        }

        if(camposLote.length === 0) return null

        dadoLote.push(id)

        const query = `UPDATE lote SET ${camposLote.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoLote)

        return resultado.affectedRows
    }


    async apagarLote(id){
        await pool.query ('DELETE * FROM lote WHERE id = ?', [id])
        return true
    }
}

module.exports = new LoteRepositorie()