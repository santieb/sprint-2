const bandModel = (connection, Sequelize) => {
    const band = connection.define('bandas_musicales', {
        id_mensaje: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
      
    },
    {
    timestamps: false
    });
    return band
}
