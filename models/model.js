let pessoas = [
  { name: 'aaa', email: 'a@a', password: '123' },
  { name: 'gabriel', email: 'gabriel@gmail.com', password: '143' },
  { name: 'carlos', email: 'carlos@gmail.com' , password: '694' }
];

function verificarUsuario(email, password) {
  for(let i = 0 ; i < pessoas.length ; i++){
    if(pessoas[i].email === email && pessoas[i].password === password) {
      return true;
    }
  }
  return false;
}

function cadastrarUsuario(usuario) {
  pessoas.push({
    name: usuario.name,
    email: usuario.email,
    password: usuario.password
  });
}

function deletarUsuario(name, email) {
  const userIndex = pessoas.findIndex(user => user.name === name && user.email === email);
  pessoas.splice(userIndex, 1);
}

function getListaUsuarios() {
  return pessoas;
}

module.exports = {
  verificarUsuario,
  cadastrarUsuario,
  deletarUsuario,
  getListaUsuarios
};