const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./database/db');
const app = express();
const cadastros = require('./database/cadastro');
const produtos = require('./database/produtos');

app.engine('handlebars', engine({ defaultLayout: 'Main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração para servir arquivos estáticos
app.use(express.static('visual'));
// Use o bodyParser para interpretar dados do corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página de início html + css
app.get('/', (req, res) => {
    res.render('home', { style: 'home.css' });
});

// Rota para a página de login html + css + javascript
app.get('/login', (req, res) => {
    res.render('login', { style: 'login.css', script: 'login.js' });
});

// Rota para adicionar um novo cadastro
app.post("/add-cadastros", function(req, res) {

    const Email = req.body.Email;
    const Senha = req.body.Senha;

    if (!Email || !Senha) {
        res.render('login', {mensagemlogin: "Por favor, preencha todos os campos."});
        return
    }
    else {

    cadastros.create({
        // Supondo que os campos do formulário tenham os atributos "E-mail" e "Senha"
        Email: req.body.Email,
        Senha: req.body.Senha
    }).then(function(){
        // Renderiza novamente a página de cadastro com a mensagem de sucesso
        res.render('login', { mensagemcadastro: "Cadastro realizado com sucesso!" });
    }).catch(function(erro){
        // Se houver um erro, renderiza novamente a página de cadastro com a mensagem de erro
        res.render('login', { mensagemcadastro: "Erro ao realizar cadastro: " + erro });
    });
}
});




app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080');
});
