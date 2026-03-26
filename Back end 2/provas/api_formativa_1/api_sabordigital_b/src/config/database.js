const mysql = require('mysql2')

require('dotenv').config() //carrega variáveis do arquivo .env .

//require() é usado para importar módulos no Node.js.

const pool = mysql.createPool({ //Aqui criamos um pool de conexões com o banco/ pool é um conjunto de conexões reutilizáveis.
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: process.env.DB_PORT,
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
}) // UTILIZO PARA QUE MEU PROJETO NÃO TENHA AS SENHAS DO BANCO, GARANTINDO UMA MAIOR SEGURANÇA


module.exports = pool //outros aquivos podem utilizar esse pool