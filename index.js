const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Definindo o EJS como engine do HTML
app.set('view engine', 'ejs');
//Configurando arquivos estáticos
app.use(express.static('public'));

//Configurando body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get('/', (req ,res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário enviado com sucesso!");
});

//Inicia o servidor
app.listen(8080, (error) => {
    if (error) {
        console.log("Ocorreu um erro: " + error);
    }
    console.log("Servidor iniciado!");
});