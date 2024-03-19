const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const router = require('./routes/rota.js');

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

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server está pronto, Porta: ' + PORT)
});
