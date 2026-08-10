const pool= require ("../config/database")

class CategoriaRepositorie{
    async listarCategoria(){
        const listaCategoria = await pool.query('SELECT * FROM categoria')
        return listaCategoria
    }

    async buscarCategoriaId(id){
        const mostrarCategoria = await pool.query('SELECT * FROM categoria WHERE id=?', [id])
        return mostrarCategoria[0]
    }

    async cadastrarCategoria(dadosDaCategoria){
        const resultadoCategoria = await pool.query('INSERT INTO categoria SET ?', [dadosDaCategoria])
        return resultadoCategoria.insertId 
    }

    async atualizarCategoria(id, dadosDaCategoria){
        const camposCategoria=[]
        const dadoCategoria=[]
        
        for(const [ key, value] of Object.entries(dadoCategoria)){
            camposCategoria.push(`${key} = ?`)
            dadoCategoria.push(value)
        }

        if(camposCategoria.length === 0)return null

        dadoCategoria.push(id)

        const query = `UPDATE categoria SET ${camposCategoria.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoCategoria)

        return resultado.affectedRows
    }

    async apagarCategoria(id){
        await pool.query ('DELETE * FROM categoria WHERE id = ?', [id])
        return true
    }
}

module.exports = new CategoriaRepositorie()