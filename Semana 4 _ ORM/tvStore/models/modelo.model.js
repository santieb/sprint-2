const Moldelosmodel = (connection, Sequelize) => {
    const modelos = connection.define('modelos', {
        id_modelo: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        nombre_modelo: {
            type: Sequelize.STRING,
        },
        id_marca: {
          type: Sequelize.INTEGER,
          foreignKey: true
        },
    },
    {
      timestamps: false
    });
    return modelos
  }
  
module.exports = Moldelosmodel;