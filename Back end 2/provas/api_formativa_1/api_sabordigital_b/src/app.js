const express = require('express')
const pool = require('./config/database') //importar

const app = express() //cria aplicações web
app.use(express.json()) //interpreta requisiçoes json

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) reject(err)
                else resolve(results)
            })
        })
    } //validação do pool

app.get('/', (req, res) => {
    res.send("API SABOR DIGITAL")
}) //testar se a api está ativa

app.get('/produtos', async (req, res) => { //req: requisição do cliete  res: resposta do servidor  async: permite que possamos utilizar o comando await, que aguarda a execução de operações assíncronas, como consultas ao banco de dados.
    try { //se tudo ocorrer corretamente, o código continua normalmente
        const produtos = await queryAsync('SELECT * FROM produto ORDER BY id DESC') //buscar todos os filmes cadastrados. ASINC: utilizamos await para esperar o resultado da consulta.
        res.json({
            sucesso: true,
            dados: produtos,
            total: produtos.length
        }) //resposta no formato json

    }catch (erro) { //caso dar erro
            console.error('Erro ao listar produtos:', erro)
            res.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao listar produtos',
                erro: erro.message
            })
        }
})

app.get('/produtos/:id', async (req, res) => {
    try{
        const { id } = req.params //parametros enviados na URL        
        if (!id || isNaN(id)) { //verficamos se o ID existe e se o ID é um número
        return res.status(400).json({ //requisição invalida
            sucesso: false,
            mensagem: 'ID de produtos inválido.'
        })
        }
        const filme = await queryAsync('SELECT * FROM produto WHERE id = ?', [id])
        if (filme.length === 0){ //se nao resultar nd o produto não existe
            return res.status(404).json({
                sucesso: false,
                mensagem: 'produto não encontrado'
            })
        }

        res.json({
            sucesso:true,
            dados: filme[0]
        })

    }catch (erro){
        console.error('erro ao listar produtos')
        res.status(500).json({
            sucesso: false,
            mensagem: 'erro ao listar produtos',
            erro: erro.mensagem
        })
    }
})

app.post('/produtos', async(req, res) => {
    try {
        const{nome, descricao, preco, disponivel} = req.body //os dados são feitos pelo cliente no body

        if(!nome || !descricao || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem:"nome, preco e disponibilidade são obrigatorios"
            })
        }

        if(typeof preco !== 'number' || preco <= 0){ //numero maior que zero
            return res.status(400).json({
                sucesso: false,
                mensagem: 'preco deve ser um numero positivo'
            })
        }

        if(typeof disponivel !== 'boolean'){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'disponivel deve ser bolean positivo'
            })

        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco: preco,
            disponivel: disponivel
    }

        const resultado = await queryAsync ('INSERT INTO produto SET ?',
        [novoProduto]) //insere o objeto na tabela

        res.status(201).json({ //criado com sucesso
            sucesso: true,
            mensagem: 'criado com sucesso',
            id: resultado.insertId
        })
    }catch (erro) {
        console.error('erro ao salvar produto:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'erro ao salvar produto',
            erro: erro.mensagem
        })
    }
})

app.put('/produtos/:id', async (req, res) => {
    try{
        const {id} = req.params
        const {nome, descricao, preco, disponivel} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso:false,
                mensagem: 'ID inválido'
            })
        }

        const produtoExiste = await queryAsync('SELECT * FROM produto WHERE id = ?', [id]) // se nao existir

        if(produtoExiste.length ===0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'produto não encontrado.'
            })
        }

        const produtoAtualizado = {}

        if(nome !== undefined) produtoAtualizado.nome = nome.trim()
        if(descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        if(preco !== undefined){
            if(typeof preco !== 'number' || preco <= 0){
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'preco deve ser um número positivo.'
                })
            }
            produtoAtualizado.preco = preco
        }
        if(disponivel !== undefined){
            if(typeof disponivel !== 'boolean'){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'disponivel deve ser bolean positivo'
            })

        }
            produtoAtualizado.disponivel = disponivel
        }

        if (Object.keys(produtoAtualizado), this.length == 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE produto SET ? WHERE id = ?',[produtoAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'produto atualizado.'
        })
}catch (erro){
    console.error('Erro ao atualizar produto:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar produto.',
            erro: erro.message
        })
       
    }
}
)

app.delete('/produtos/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inválido.'
            })
        }

        const produtoExiste = await queryAsync('SELECT * FROM produto WHERE id = ?', [id])
       
        if(produtoExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'produto não encontrado.'
            })
        }

        await queryAsync('DELETE FROM produto WHERE id = ?', [id])

        res.status(200).json({
            sucesso: true,
            mensagem:'produto apagado'
        })
    } catch (erro) {
        console.error('Erro ao apagar produto:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar produto.',
            erro: erro.message
        })
    }
})







module.exports = app
