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

router.post('/login', async (req, res) => {
  if (verificarSessao(req)) return;
  await controller.validacaoLogin(req, res);
});

router.post('/logout', (req, res) => {
  if (verificarSessao(req)) {
      req.session.destroy(() => {
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

router.post('/cadastro', async (req, res) => {
  if (!verificarSessao(req)) return;
  await controller.cadastrarUsuario(req, res);
});

router.get('/lista-tarefas', async (req, res) => {
  if (verificarSessao(req)) {
      res.render('loginEfetuado', {
        name: (await controller.getListaUsuarios()).find(pessoa => pessoa.email === req.session.login).name
      });
  } else {
      res.redirect('/login');
  }
})

router.get('/lista', (req, res) => {
  if (verificarSessao(req)) {
      res.render('lista');
  } else {
      res.redirect('/login');
  }
});

router.post('/lista/json', async (req, res) => {
  if (!verificarSessao(req)) return;
  await controller.deletarUsuario(req, res);
});

router.get('/lista/json', async (req, res) => {
  if (verificarSessao(req)) {
      res.status(200).json({
          pessoas: (await controller.getListaUsuarios())
      });
  } else {
      res.redirect('/login');
  }
});

module.exports = router;