const express = require('express')
const pool = require('./config/database')

const app = express()
app.use(express.json())

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

app.get('/filmes', async (req,res) => {
    try {
        const filmes = await queryAsync('SELECT * FROM filme')

        res.json({
            sucesso: true,
            dados: filmes,
            total: filmes.length
        })
    }catch (erro){
        console.error('Erro ao listar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })
    }
})

app.get('/filmes/:id', async(req,res) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
            sucesso: false,
            mensagem: 'ID de filmeinválido'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if (filme.length === 0){
            return res.status(404).json({
                sucesso:false,
                mensagem:'Filme não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: filme[0]
        })

    } catch (erro) {
        console.error('Erro ao listar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })
    }
})

app.post('/filmes', async(req,res) =>{
    try {
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if(!titulo || !genero || !duracao){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Título, genero e ducação são obrigatórios'
            })
        }

        if(typeof duracao !== 'number' || duracao <= 0 ){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Duração deve ser um número positivo.'
            })
        }

        const novoFilme = {
            titulo: titulo.trim(),
            genero: genero.trim(),
            duracao,
            classificacao: classificacao || null,
            data_lancamento: data_lancamento || null
        }

        const resultado = await queryAsync('INSERT INTO filme SET ?',[novoFilme])

        res.status(201).json({
            sucesso: true,
            mensagem: 'Filme cadastrado com sucesso.',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao salvar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao salvar filme.',
            erro: erro.message
        })
    }
} )

app.put('/filmes/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if(filmeExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado.'
            })
        }

        const filmeAtualizado = {}

        if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim()
        if(genero !== undefined) filmeAtualizado.genero = genero.trim()
        if(duracao !== undefined){
            if(typeof duracao !== 'number' || duracao <= 0){
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Duracao deve ser um número positivo.'
                })
            }
            filmeAtualizado.duracao = duracao
        }
        if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao
        if(data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento

        if(Object.keys(filmeAtualizado).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE filme SET ? WHERE id = ?',[filmeAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'Filme atualizado.'
        })

    } catch (erro) {
        console.error('Erro ao atualizar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar filme.',
            erro: erro.message
        })
       
    }
})

app.delete('/filmes/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if(filmeExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado.'
            })
        }

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])

        res.status(200).json({
            sucesso: true,
            mensagem:'Filme apagado'
        })
    } catch (erro) {
        console.error('Erro ao apagar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar filme.',
            erro: erro.message
        })
    }
})





app.get('/salas', async (req,res) => {
    try {
        const filmes = await queryAsync('SELECT * FROM sala')

        res.json({
            sucesso: true,
            dados: sala,
            total: sala.length
        })
    }catch (erro){
        console.error('Erro ao listar salas:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar salas',
            erro: erro.message
        })
    }
})

app.get('/salas/:id', async(req,res) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
            sucesso: false,
            mensagem: 'ID de filmeinválido'
            })
        }

        const sala = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if (sala.length === 0){
            return res.status(404).json({
                sucesso:false,
                mensagem:'sala não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: sala[0]
        })

    } catch (erro) {
        console.error('Erro ao listar salas:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar salas',
            erro: erro.message
        })
    }
})

app.post('/salas', async(req,res) =>{
    try {
        const {nome, capacidade} = req.body

        if(!nome || !capacidade){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'nome e capacidade são obrigatórios'
            })
        }

        if(typeof capacidade !== 'number' || capacidade <= 0 ){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'capacidade deve ser um número positivo.'
            })
        }

        const novoSala = {
            nome: nome.trim(),
            capacidade,
        }

        const resultado = await queryAsync('INSERT INTO sala SET ?',[novoSala])

        res.status(201).json({
            sucesso: true,
            mensagem: 'sala cadastrada com sucesso.',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao salvar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao salvar sala.',
            erro: erro.message
        })
    }
} )

app.put('/salas/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {nome, capacidade} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID sala inválido.'
            })
        }

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
       
        if(salaExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala não encontrado.'
            })
        }

        const salaAtualizada = {}

        if(nome !== undefined) salaAtualizada.nome = nome.trim()
        if(capacidade !== undefined){
            if(typeof capacidade !== 'number' || capacidade <= 0){
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'capacidade deve ser um número positivo.'
                })
            }
            salaAtualizada.capacidade = capacidade
        }

        if(Object.keys(salaAtualizada).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE sala SET ? WHERE id = ?',[salaAtualizada, id])
        res.json({
            sucesso: true,
            mensagem: 'sala atualizado.'
        })

    } catch (erro) {
        console.error('Erro ao atualizar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sala.',
            erro: erro.message
        })
       
    }
})

app.delete('/salas/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID sala inválido.'
            })
        }

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
       
        if(salaExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'sala não encontrado.'
            })
        }

        await queryAsync('DELETE FROM sala WHERE id = ?', [id])

        res.status(200).json({
            sucesso: true,
            mensagem:'sala apagado'
        })
    } catch (erro) {
        console.error('Erro ao apagar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar sala.',
            erro: erro.message
        })
    }
})





app.get('/sessao', async (req,res) => {
    try {
        const sessao = await queryAsync('SELECT * FROM sessao')

        res.json({
            sucesso: true,
            dados: sessao,
            total: sessao.length
        })
    }catch (erro){
        console.error('Erro ao listar sessao:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao sessao ingressos',
            erro: erro.message
        })
    }
})

app.get('/sessao/:id', async(req,res) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
            sucesso: false,
            mensagem: 'ID de sessao inválido'
            })
        }

        const sessao = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])

        if (sessao.length === 0){
            return res.status(404).json({
                sucesso:false,
                mensagem:'sassao não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: sessao[0]
        })

    } catch (erro) {
        console.error('Erro ao listar sessao:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar sessao',
            erro: erro.message
        })
    }
})

app.post('/sessao', async(req,res) =>{
    try {
        const {filme_id, sala_id, data_hora, preco} = req.body

        if(!filme_id || isNaN(filme_id)){
            return res.status(400).json({
            sucesso: false,
            mensagem: 'ID de filme inválido'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [filme_id])

        if (filme.length === 0){
            return res.status(404).json({
                sucesso:false,
                mensagem:'filme não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: filme[0]
        })

        if(!sala_id || isNaN(sala_id)){
            return res.status(400).json({
            sucesso: false,
            mensagem: 'ID de sala inválido'
            })
        }

        const sala = await queryAsync('SELECT * FROM sala WHERE id = ?', [sala_id])

        if (sala.length === 0){
            return res.status(404).json({
                sucesso:false,
                mensagem:'sala não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: sala[0]
        })

        if(!filme_id || !sala_id || !data_hora || !preco){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'os dados são obrigatórios são obrigatórios'
            })
        }

        if(typeof preco !== 'number' || preco <= 0 ){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'data e hora deve ser um número positivo.'
            })
        }

        const novoSessao = {
            filme_id,
            sala_id,
            data_hora,
            preco,
        }

        const resultado = await queryAsync('INSERT INTO sessao SET ?',[novoSessao])

        res.status(201).json({
            sucesso: true,
            mensagem: 'sessao cadastrada com sucesso.',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao salvar sessao:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao salvar sessao.',
            erro: erro.message
        })
    }
} )

module.exports = app