const bancoDeDados = require('./bcdd');

async function verificarUsuario(email, password) {
  let [ rows ] = await bancoDeDados.query("select * from usuarios where email = ? and password = ?", [email, password]);
  if (rows.length === 0) {
    return false;
  } else {
    return true;
  }
}

async function verificarSeEmailJaExiste(email) {
  let [ rows ] = await bancoDeDados.query("select * from usuarios where email = ?", [email]);
  if (rows.length === 0) {
    return false;
  } else {
    return true;
  }
}

async function cadastrarUsuario(name, email, password) {
  await bancoDeDados.query('insert into usuarios value(?, ?, ?)', [name, email, password]);
}

async function deletarUsuario(name, email) {
  await bancoDeDados.query('delete from usuarios where name = ? and email = ?', [name, email]);
}

async function getListaUsuarios() {
  let [rows] = await bancoDeDados.query('select * from usuarios');
  return rows
}

module.exports = {
  verificarUsuario,
  cadastrarUsuario,
  deletarUsuario,
  getListaUsuarios,
  verificarSeEmailJaExiste
};