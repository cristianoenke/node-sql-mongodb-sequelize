const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres', 'postgres', 'postgres123', {
  host: 'localhost',
  port: 5432,
  protocol: null,
  logging: false,
  dialect: 'postgres'
})

module.exports = sequelize

// Test DB Conenction //
async function test(){
  try{
      let result = await sequelize.authenticate()
      console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
  }
  catch(error){
      console.error("Houve um erro ao conectar com o banco de dados:")
      console.error(error)
      process.exit()
  }
}

test()
