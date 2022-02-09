const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

connection
    .authenticate()
    .then(() => {
        console.log("DB connection realizada.");
    })
    .catch((error) => {
        console.log("Erro: " + error);
    });

const app = express();

//Definindo o EJS como engine do HTML
app.set('view engine', 'ejs');
//Configurando arquivos estáticos
app.use(express.static('public'));

//Configurando body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get('/', (req ,res) => {
    Pergunta.findAll({ raw: true }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
});

//Inicia o servidor
app.listen(8080, (error) => {
    if (error) {
        console.log("Ocorreu um erro: " + error);
    }
    console.log("Servidor iniciado!");
});