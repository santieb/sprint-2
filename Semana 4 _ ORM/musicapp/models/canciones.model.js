const Cancionmodel = (connection, Sequelize) => {
  const Cancion = connection.define('canciones', {
      id_cancion: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre_cancion: {
        type: Sequelize.STRING,
      },
      duracion_cancion: {
        type: Sequelize.INTEGER,
      },
      id_album: {
        type: Sequelize.INTEGER
      },
      id_banda: {
        type: Sequelize.INTEGER
      },
      fecha_publicacion: {
        type: Sequelize.DATE
      }
  },
  {
    timestamps: false
  });
  return Cancion
}

module.exports = Cancionmodel;