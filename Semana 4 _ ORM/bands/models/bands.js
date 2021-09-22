const bandModel = (connection, Sequelize) => {
    const bandas = connection.define('bandas_musicales', {
        id_album: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre_album: {
            type: Sequelize.STRING
        },
        bandas: {
            type: Sequelize.STRING
        },
        fecha_publicacion: {
            type: Sequelize.DATE
        },
    },
    {
    timestamps: false
    });
    return bandas
}

module.exports = bandModel;