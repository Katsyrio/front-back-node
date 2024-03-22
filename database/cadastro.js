const db = require("./db");

const cadastros = db.sequelize.define('cadastros', {
    Email: {
        type: db.Sequelize.STRING
    },
    Senha: {
        type: db.Sequelize.STRING
    },
});

 //cadastros.sync({ force: true }).then(() => {
 //   console.log('Tabela cadastros sincronizada.');
 //}).catch(err => {
  //  console.error('Erro ao sincronizar tabela cadastros:', err);
//});

module.exports = cadastros;