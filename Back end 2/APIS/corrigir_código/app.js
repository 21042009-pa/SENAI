function ValidarId(id, res)
{
    if(!id || isNaN(id))
    {
        return res.status(400).json
        ({
            sucesso: false,
            mensagem: 'ID inválido'
        })
    }

}

//Exercício 1 - Usuários



function EncontrarUsuario(usuario,res)
{
    if (usuario.length === 0)
    {
        return res.status(404).json
        ({
            sucesso:false,
            mensagem:'Usuario não encontrado'
        })
    }
}

function ErroAoListarUsuario(erro, res)
{
    console.error('Erro ao listar usuario:', erro)
        res.status(500).json
        ({
            sucesso: false,
            mensagem: 'Erro ao listar usuario',
            erro: erro.message
        })
}

app.get('/usuario', async (req, res) => 
{
    try
    {
        const usuarios = await queryAsync("SELECT * FORM usuario")

        res.json
        ({
            sucesso: true,
            dados: usuarios,
            total: usuarios.length
        })
    }catch (erro)
    {
        ErroAoListarUsuario(erro, res)
    }
    
})

app.get('/usuario/:id', async (req, res) => 
{
    try 
    {
        const {id} = req.params

        ValidarId(id, res)

        const usuario = await queryAsync("SELECT * FROM usuario WHERE id = ?", [id])

        EncontrarUsuario(usuario, res)

        res.json
        ({
            sucesso:true,
            dados: usuario[0]
        })

    } catch (erro) 
    {
        ErroAoListarUsuario(res)
    }
})



//Exercício 2 - Pedidos
function ValidarAtributos(cliente, valor, res)
{
    if(!cliente || !valor)
    {
        return res.status(400).json
        ({
            sucesso: false,
            mensagem: 'Cliente e valor são obrigatórios'
        })
    }
}

function ValidarNumero (valor, res)
{
    if(typeof valor !== 'number' || valor <= 0 )
    {
        return res.status(400).json
        ({
            sucesso: false,
            mensagem: 'Valor deve ser um número positivo.'
        })
    }
}


app.post('/pedidos', async (req, res) => 
{
    try 
    {
        const { cliente, valor } = req.body

        ValidarAtributos(cliente, valor, res)
        ValidarNumero(valor,res)

        const novoPedido = 
        {
            cliente: cliente.trim(),
            valor
        }
        const resultado = await queryAsync('INSERT INTO filme SET ?',[novoPedido])

        res.status(201).json
        ({
            sucesso: true,
            mensagem: 'Pedido cadastrado com sucesso.',
            id: resultado.insertId
        })
        
    } catch (erro) 
    {
        console.error('Erro ao salvar pedido:', erro)
        res.status(500).json
        ({
            sucesso: false,
            mensagem: 'Erro ao salvar pedido.',
            erro: erro.message
        })
    }
})

//Exercício 3 - Salas

function EncontrarSala (salaExiste, res)
{
    if(salaExiste.length === 0)
    {
        return res.status(404).json
        ({
            sucesso: false,
            mensagem: 'Sala não encontrada.'
        })
    }
}

app.put('/salas/:id', async (req, res) => 
{
    try 
    {
        const {id} = req.params
        const dadosSala = req.body

        ValidarId(id,res)

        const salaAtualizada = {}

        if(dadosSala !== undefined) salaAtualizada.dadosSala = dadosSala.trim()

        await queryAsync('UPDATE sala SET ? WHERE id = ?',[salaAtualizada, id])
        res.json
        ({
            sucesso: true,
            mensagem: 'sala atualizada.'
        })

    } catch (erro) 
    {
        console.error('Erro ao atualizar sala:', erro)
        res.status(500).json
        ({
            sucesso: false,
            mensagem: 'Erro ao atualizar sala.',
            erro: erro.message
        })
       
    }
})

app.delete('/salas/:id', async (req, res) => 
{
    try 
    {
        const {id} = req.params

        ValidarId(id,res)

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
        EncontrarSala(salaExiste, res)

        await queryAsync('DELETE FROM sala WHERE id = ?', [id])

        res.status(200).json({
            sucesso: true,
            mensagem:'Sala apagada'
        })

    } catch (erro) 
    {
        console.error('Erro ao apagar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar sala.',
            erro: erro.message
        })
    }
})