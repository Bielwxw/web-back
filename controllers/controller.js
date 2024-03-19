const model = require('../models/model.js');

function validacaoLogin(req, res) {
  if (req.body.password.trim().replace(/ +/g, '') !== req.body.password) {
    return res.render('login', { erro: 'Senha não pode conter espaços' });
  }
  else if (model.verificarUsuario(req.body.email, req.body.password)) {
    req.session.login = req.body.email;
    res.cookie('login', req.body.email);
    res.redirect('/');
    console.log('Email:' + req.body.email + '/' + 'senha:' + req.body.password + '/' + 'Status : usuário logado');
  }
  else {
    return res.render('login', { erro: 'Usuário não encontrado' });
  }
}

function cadastrarUsuario(req, res) {
  if (req.body.password === req.body.password_confirm) {
    model.cadastrarUsuario(req.body);
    res.redirect('/login');
  }
  else {
      res.render('cadastro', { erro: 'Senhas não são iguais' });
  }
}

function deletarUsuario(req, res) {
  model.deletarUsuario(req.body.name, req.body.email);
  return res.status(200).json();
}

function getListaUsuarios() {
  return model.getListaUsuarios().map(user => {
    return { name: user.name, email: user.email }
  });
}

module.exports = {
  validacaoLogin,
  cadastrarUsuario,
  deletarUsuario,
  getListaUsuarios
}