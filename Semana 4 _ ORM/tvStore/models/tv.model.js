const Televisormodel = (connection, Sequelize) => {
  const Televisor = connection.define(
    "televisores",
    {
      id_televisor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      id_marca: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      id_modelo: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      precio: {
        type: Sequelize.INTEGER,
      },
      tamano_pantalla: {
        type: Sequelize.INTEGER,
      },
      smart_tv: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );
  return Televisor;
};

module.exports = Televisormodel;
