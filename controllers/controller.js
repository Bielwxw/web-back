const model = require('../models/model.js');

async function validacaoLogin(req, res) {
  if (req.body.password.trim().replace(/ +/g, '') !== req.body.password) {
    return res.render('login', { erro: 'Senha não pode conter espaços' });
  }
  else if (await model.verificarUsuario(req.body.email, req.body.password)) {
    req.session.login = req.body.email;
    res.redirect('/');
    console.log('Email:' + req.body.email + '/' + 'senha:' + req.body.password + '/' + 'Status : usuário logado');
  }
  else {
    return res.render('login', { erro: 'Usuário não encontrado' });
  }
}

async function cadastrarUsuario(req, res) {
  let emailExiste = await model.verificarSeEmailJaExiste(req.body.email);
  if (emailExiste) {
     res.render('cadastro', { erro: "Email já cadastrado"});
  }
  else if (req.body.password !== req.body.password_confirm){
      res.render('cadastro', { erro: 'Senhas não são iguais' });
  }
  else {
      await model.cadastrarUsuario(req.body.name, req.body.email, req.body.password);
      res.redirect('/login');
  }
}

async function deletarUsuario(req, res) {
  if (req.body.email === req.session.login) {
    return res.json({ erro: 'Não pode deletar a si mesmo' });
  }
  await model.deletarUsuario(req.body.name, req.body.email);
  return res.status(200).json();
}

async function getListaUsuarios() {
  return (await model.getListaUsuarios()).map(user => {
    return { name: user.name, email: user.email }
  });
}

module.exports = {
  validacaoLogin,
  cadastrarUsuario,
  deletarUsuario,
  getListaUsuarios
}