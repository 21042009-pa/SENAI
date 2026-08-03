const pool= require ("../config/database")

class SubcategoriaRepositorie{
    async listarSubcategoria(){
        const listaSubcategoria = await pool.query('SELECT * FROM subcategoria')
        return listaSubcategoria
    }

    async buscarSubcategoriaId(id){
        const mostrarSubcategoria = await pool.query('SELECT * FROM subcategoria WHERE id=?', [id])
        return mostrarSubcategoria[0]
    }

    async cadastrarSubcategoria(dadosDaSubcategoria){
        const resultadoSubcategoria = await pool.query('INSERT INTO subcategoria SET ?', [dadosDaSubcategoria])
        return resultadoSubcategoria.insertId 
    }

    async atualizarSubcategoria(id, dadosDaSubcategoria){
        const camposSubcategoria=[]
        const dadoSubcategoria=[]
        
        for(const [ key, value] of Object.entries(dadoSubcategoria)){
            camposSubcategoria.push(`${key} = ?`)
            dadoSubcategoria.push(value)
        }

        if(camposSubcategoria.length === 0)return null

        dadoSubcategoria.push(id)

        const query = `UPDATE fornecedor SET ${camposSubcategoria.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoSubcategoria)

        return resultado.affectedRows
    }

    async apagarSubcategoria(id){
        await pool.query ('DELETE * FROM subcategoria WHERE id = ?', [id])
        return true
    }
}

module.exports = new SubcategoriaRepositorie()