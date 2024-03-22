const Sequelize = require("sequelize")

const sequelize = new Sequelize('projeto', 'Sergio', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}

console.log("Conexao sucedida!")