const Sequelize = require('sequelize')

const sequelize = new Sequelize ('mysql://root@localhost:3306')

sequelize.query('SELECT * FROM `users`',
{ type: sequelize.QueryTypes.SELECT }
).then(function(resultados) {
    console.log(resultados)
});