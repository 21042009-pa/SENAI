const BASE_URL = "http://localhost:3000"//fixar conexão

//1.buscar os produtos


async function criarProduto() {
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados.dados

    




    
    
}

async function buscarProdutos() {
    //realiza conexao (espera até receber a resposta)
    const response = await fetch(`${BASE_URL}/produtos`)
    //armazena os dados (espera até receber os dados)
    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados.dados
}

//2.criar pedido

async function criarPedido(cliente, itens) {
    //solicita comuunicação e executa o método post (publica o cliente e os itens do pedido)
    const response =  await fetch(`${BASE_URL}/pedidos`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({cliente, itens}),
    })

    const dados = await response.json()

    if(!response.ok) throw new Error(dados.esso || `Erro ${response.status}`)
        return dados
}

//3.buscar pedidos - (foco para a cozinha ter acesso aos pedidos)

async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)
    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados
}

//4.deletar pedido - utilizado pela cozinha

async function deletarPedido(id) {
    //chamamos o método delete (apaga do banco de pedidos)
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE",
    })

const dados = await response.json()
if(!response.ok)throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}

//5.atualizar status do pedido

async function atualizarStatusPedido(id, novoStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
        method: "PACH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({status: novoStatus}),
    })
 const dados = await response.json()
 if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}