const app = require('./app');
const pool = require('./config/database'); //importação

const PORT = 3000;

pool.getConnection((err, connection) => { //tenta conectar com o pool
    if (err) { //caso de erro
        console.error('Erro ao conectar no banco:', err);
        process.exit(1); // encerra o programa
    }

    console.log('Conectado ao MySQL com sucesso!');
    connection.release(); //se conectar é liberada para pool
});

app.listen(PORT, () => { //servidor roda conexoes HTTP
    console.log(`Servidor rodando na porta ${PORT}`);
});