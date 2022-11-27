const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemaDeCadastro', 'root', '10#a.927K', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('conectado com sucesso')
}).catch((erro) => {
    console.log(`falha na conexão ${erro}`)
})