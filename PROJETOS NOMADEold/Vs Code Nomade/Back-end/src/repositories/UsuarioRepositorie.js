const pool = require ("../config/database")

class UsuarioRepositorie{
    async listarUsuario(){
        const listaUsuario = await pool.query('SELECT * FROM usuario')
        return listaUsuario
    }

    async buscarUsuarioId(id){
        const mostrarUsuario = await pool.query('SELECT * FROM usuario WHERE id = ? ', [id])
        return mostrarUsuario[0]
    }

    async cadastrarUsuario(dadosDoUsuario){
        const resultadoUsuario = await pool.query('INSERT INTO usuario SET ?', [dadosDoUsuario])
        return resultadoUsuario.insertId 
    }

    async atualizarUsuario(id, dadosDoUsuario){
        const camposUsuario = []
        const dadoUsuario = []

        for(const [key, value] of Object.entries(dadosDoUsuario)){
            camposUsuario.push(`${key} = ?`)
            dadoUsuario.push(value)
        }

        if(camposUsuario.length === 0) return null

        dadoUsuario.push(id)

        const query = `UPDATE usuario SET ${camposUsuario.join(',')} WHERE id = ?`

        const resultado = await pool.query(query, dadoUsuario)

        return resultado.affectedRows
    }


    async apagarUsuario(id){
        await pool.query ('DELETE * FROM usuario WHERE id = ?', [id])
        return true
    }
}

module.exports = new UsuarioRepositorie()