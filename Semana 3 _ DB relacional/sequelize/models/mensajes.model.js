const Mensajemodel = (connection, Sequelize) => {
  const Mensaje = connection.define('mensaje', {
      id_mensaje: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      texto_mensaje: {
        type: Sequelize.STRING
      },
      fecha_mensaje: {
        type: Sequelize.DATE
      },
      id_usuario: {
        type: Sequelize.INTEGER
      }
  },
  {
    timestamps: false
  });
  return Mensaje
}

module.exports = Mensajemodel;