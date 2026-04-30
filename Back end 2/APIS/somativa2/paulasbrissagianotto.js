function validarExistencia (res, reservas){
    if(reservas.length === 0) {
        res.status(400).json({
            sucesso: false,
            mensagem: 'reserva não encontrada'
        })
    }
    else{
        return true
    }

}

function validarDadosAtualizados (dados, res){
    if(Object.keys(dados).length === 0){
        res.status(400).json({
            sucesso: false,
            mensagem: 'Nenhum dado enviado'
        })
    }
}

app.put('/reserva/:id', async (req, res) => {
    try {
        const {id} = req.params
        const dados = req.body
        const reservas = await queryAsync("SELECT * FROM reservas WHERE id = ?", [id])
        validarExistencia(res, reservas)
        validarDadosAtualizados(dados, res)
        
        await queryAsync ("UPDATE reservas SET ? WHERE id = ?", [dados,id])
        res.status(200).json({
            sucesso:true,
            mensagem: "Reserva atualizada"
        })
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: erro
        })
        
    }
})

// NOTA: Falta fazer o filtro de busca por data aqui
