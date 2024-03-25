const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "aplicationofpweb.mysql.database.azure.com",
  user: "guest1",
  password: "BKBE9bvP%M&W7m",
  database: "sistema_login",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async () => {
  try {
    const conexao = await pool.getConnection();
    console.log('Banco de dados conectado');
    conexao.release(); // Liberar a conexão para o pool
  } catch (err) {
    console.error('Erro: ' + err);
  }
})();

module.exports = pool;