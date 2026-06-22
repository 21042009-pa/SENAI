document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("forms-cadastro");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Captura dos valores dos inputs
        const nome = document.getElementById("nome-prato").value.trim();
        const descricao = document.getElementById("descricao_prato").value.trim();
        const preco = document.getElementById("preco_prato").value;
        const categoria = document.getElementById("categoria").value.trim();
        const imagem = document.getElementById("foto-prato").files[0];

        // Validação: Verifica se todos os campos obrigatórios (incluindo categoria) foram preenchidos
        if (!nome || !descricao || !preco || !categoria || !imagem) {
            mensagem.textContent = "Preencha todos os campos obrigatórios.";
            mensagem.style.color = "red";
            return;
        }

        try {
            const formData = new FormData();
            formData.append("nome", nome);
            formData.append("descricao", descricao);
            formData.append("preco", preco);
            formData.append("categoria", categoria);
            formData.append("imagem", imagem);

            // Executa a função de envio para a API/Backend
            await cadastrarProduto(formData);

            // Feedback visual de sucesso
            mensagem.textContent = "Produto cadastrado com sucesso!";
            mensagem.style.color = "green";

            // Limpa o formulário após o sucesso
            form.reset();

        } catch (erro) {
            // Tratamento seguro: se erro.message for undefined, exibe o erro completo ou frase padrão
            mensagem.textContent = erro.message || erro || "Erro desconhecido ao cadastrar o produto.";
            mensagem.style.color = "red";
        }
    });
});
