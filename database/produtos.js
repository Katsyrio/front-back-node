const db = require("./db");

const produtos = db.sequelize.define('produtos', {
    Nomeprod: {
        type: db.Sequelize.STRING
    },
    Valor: {
        type: db.Sequelize.STRING
    },
    Quantidade: {
        type: db.Sequelize.INTEGER
    },
    Codbarra: {
        type: db.Sequelize.STRING
    },
});

 //produtos.sync({ force: true }).then(() => {
  //  console.log('Tabela Produtos sincronizada.');
 //}).catch(err => {
  // console.error('Erro ao sincronizar tabela Produtos:', err);
 //});

module.exports = produtos;