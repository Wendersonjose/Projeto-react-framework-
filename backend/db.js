const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',       // Host do banco de dados
  user: 'root',            // Usuário root
  password: '',            // Sem senha
  database: 'lancheirinha_db', // Nome do banco de dados
});

module.exports = db;
