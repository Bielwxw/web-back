const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();

function verificarSessao(req) {
  if (req.session?.login) {
      return true
  } else {
      return false
  }
}

router.get('/', (req, res) => {
  if (verificarSessao(req)) {
      res.render('index');
  } else {
      res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  if (!verificarSessao(req)) {
      res.render('login', { erro: '' });
  } else {
      res.redirect('/');
  }
});

router.post('/login', (req, res) => {
  if (verificarSessao(req)) return;
  controller.validacaoLogin(req, res);
});

router.post('/logout', (req, res) => {
  if (verificarSessao(req)) {
      req.session.destroy(() => {
          res.clearCookie('login');
          return res.redirect('/login');
      })
  }
});

router.get('/cadastro', (req, res) => {
  if (verificarSessao(req)) {
      res.render('cadastro', { erro:'' })
  } else {
      res.redirect('/login');
  }
});

router.post('/cadastro', (req, res) => {
  if (!verificarSessao(req)) return;
  controller.cadastrarUsuario(req, res);
});

router.get('/lista-tarefas', (req, res) => {
  if (verificarSessao(req)) {
      res.render('loginEfetuado', {
        name: controller.getListaUsuarios().find(pessoa => pessoa.email === req.session.login ).name
      });
  } else {
      res.redirect('/login');
  }
})

router.get('/lista', (req, res) => {
  if (verificarSessao(req)) {
      res.render('lista')
  } else {
      res.redirect('/login');
  }
});

router.post('/lista/json', (req, res) => {
  if (!verificarSessao(req)) return;
  controller.deletarUsuario(req, res);
});

router.get('/lista/json', (req, res) => {
  if (verificarSessao(req)) {
      res.status(200).json({
          pessoas: controller.getListaUsuarios()
      });
  } else {
      res.redirect('/login');
  }
});

module.exports = router;