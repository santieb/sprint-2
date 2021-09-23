const Albummodel = (connection, Sequelize) => {
  const Album = connection.define('albumes', {
      id_album: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombre_album: {
        type: Sequelize.STRING
      },
      banda: {
        type: Sequelize.INTEGER
      },
      fecha_publicacion: {
        type: Sequelize.DATE
      }
  },
  {
    timestamps: false
  });
  return Album
}

module.exports = Albummodel;