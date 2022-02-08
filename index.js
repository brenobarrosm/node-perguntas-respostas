const express = require("express");
const app = express();

//Definindo o EJS como engine do HTML
app.set('view engine', 'ejs');
//Configurando arquivos estáticos
app.use(express.static('public'));

app.get('/', (req ,res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Ocorreu um erro: " + error);
    }
    console.log("Servidor iniciado!");
})