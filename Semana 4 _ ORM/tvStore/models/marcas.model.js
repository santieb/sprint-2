const Marcasmodel = (connection, Sequelize) => {
  const marcas = connection.define(
    "marcas",
    {
      id_marcas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      nombre_marca: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return marcas;
};

module.exports = Marcasmodel;
