

const Bandamodel = (connection, Sequelize) => {
  const Banda = connection.define('bandas_musicales', {
      id_banda: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre_banda: {
        type: Sequelize.STRING
      },
      integrantes: {
        type: Sequelize.INTEGER
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_separacion: {
        type: Sequelize.DATE
      },
      pais: {
        type: Sequelize.STRING
      }
  },
  {
    timestamps: false
  });
  return Banda
}

module.exports = Bandamodel;