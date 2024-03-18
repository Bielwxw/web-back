const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));


let pessoas = [
    { name: 'aaa', email: 'a@a', password: '123' },
    { name: 'gabriel', email: 'gabriel@gmail.com', password: '143' },
    { name: 'carlos', email: 'carlos@gmail.com' , password: '694' }
];

function verificarSessao(req) {
    if (req.session?.login) {
        return true
    } else {
        return false
    }
}

// Transições de processos (eventos) da aplicação web ; 

app.get('/', (req, res) => {
    if (verificarSessao(req)) {
        res.render('index');
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    if (!verificarSessao(req)) {
        res.render('login', { erro: '' });
    } else {
        res.redirect('/');
    }
});

app.post('/login', (req, res) => {
    if (verificarSessao(req)) return;

    let usuarioErrado = true;

    if (req.body.password.trim().replace(/ +/g, '') !== req.body.password) {
        return res.render('login', { erro: 'Senha não pode conter espaços' });
    }

    for(let i = 0 ; i < pessoas.length ; i++){
        if(pessoas[i].email === req.body.email && pessoas[i].password === req.body.password) {
            req.session.login = req.body.email;
            res.cookie('login', 'req.body.email');
            res.redirect('/');
            console.log('Email:' + pessoas[i].email + '/' + 'senha:' + pessoas[i].password + '/' + 'Status : usuário logado');
            usuarioErrado = false;
            break;
        }
    }

    if (usuarioErrado) {
        return res.render('login', { erro: 'Usuário não encontrado' });
    }
});

app.post('/logout', (req, res) => {
    if (verificarSessao(req)) {
        req.session.destroy(() => {
            res.clearCookie('login');
            return res.redirect('/login');
        })
    }
});

app.get('/cadastro', (req, res) => {
    if (verificarSessao(req)) {
        res.render('cadastro', { erro:'' })
    } else {
        res.redirect('/login');
    }
});

app.post('/cadastro', (req, res) => {
    if (!verificarSessao(req)) return;

    if (req.body.password === req.body.password_confirm) {
        res.redirect('/login');
        pessoas.push({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    }
    else {
        res.render('cadastro', { erro: 'Senhas não são iguais' });
    }
});

app.get('/lista-tarefas', (req, res) => {
    if (verificarSessao(req)) {
        res.render('loginEfetuado', { name: pessoas.find(pessoa => pessoa.email === req.session.login ).name });
    } else {
        res.redirect('/login');
    }
})

app.get('/lista', (req, res) => {
    if (verificarSessao(req)) {
        res.render('lista')
    } else {
        res.redirect('/login');
    }
});

app.post('/lista/json', (req, res) => {
    if (!verificarSessao(req)) return;

    const userIndex = pessoas.findIndex(user => user.name === req.body.name && user.email === req.body.email);
    pessoas.splice(userIndex, 1);
    return res.status(204).json()
});

app.get('/lista/json', (req, res) => {
    if (verificarSessao(req)) {
        res.status(200).json({
            pessoas: pessoas.map(user => {
                return { name: user.name, email: user.email }
            })
        });
    } else {
        res.redirect('/login');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server está pronto, Porta: ' + PORT)
});
