// ============================================ //
// Exercício 1 - Usuários
// ============================================ //
function mensagem(res, tipo) {
  res.status(400).json({
    sucesso: false,
    mensagem: `${tipo} não encontrado(a).` 
  });
}

const validarExistencia = (resultado, res, tipo) => {
  if (resultado.length === 0) {
    mensagem(res, tipo);
    return false;
  }
  return true;
};

app.get("/usuario", async (req, res) => {
  try {
    const listaUsuarios = await queryAsync("SELECT * FROM usuario");
    res.status(200).json({
      sucesso: true,
      dados: listaUsuarios,
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

app.get("/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await queryAsync("SELECT * FROM usuario WHERE id = ?", [
      id,
    ]);

    if (!validarExistencia(usuario, res, "Usuário")) {
      return;
    }

    res.status(200).json({
      sucesso: true,
      dados: usuario[0],
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

// ============================================ //
// Exercício 2 - Pedidos
// ============================================ //
validarDadosPedido = ({ cliente, valor }) => {
  if (cliente || valor == undefined) {
    return "Cliente e valor são obrigatórios.";
  }

  if (typeof valor !== "numer" || valor <= 0) {
    return "Valor deve ser um número positivo.";
  }

  return null;
};

app.post("/pedidos", async (req, res) => {
  try {
    const erro = validarDadosPedido(req.body);

    if (erro) {
      return res.status(404).json({
        sucesso: false,
        mensagem: erro,
      });
    }

    await queryAsync("INSERT INTO pedido SET ?", [req.body]);
    res.status(201).json({
      sucesso: true,
      mensagem: "Pedido cadastrado!",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

// ============================================ //
// Exercício 3 - Salas
// ============================================ //
const validarDadosAtualizados = (dados, res) => {
  if (Object.keys(dados).length === 0) {
    res.status(400).json({
      sucesso: false,
      mensagem: "Nenhum dado enviado.",
    });
    return false;
  }
  return true;
};

app.put("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (!validarExistencia(sala, res, "Sala")) {
      return;
    }

    if (!validarDadosAtualizados(dados, res)) {
      return
    }

    if(!validarDadosAtualizados(dados, res)){
        return
    } 

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [dados, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala atualizada!",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const id = req.params;

    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (validarExistencia(sala, res, "Sala")) {
      return;
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);
    res.status(200).json({
      sucesso: true,
      mensagem: "Sala apagada!",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});