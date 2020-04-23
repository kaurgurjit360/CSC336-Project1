module.exports = (sequelize, Datatypes) => {
    const album = sequelize.define("album", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        album_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        }

    });

    // album.associate = models => {
    //     album.hasMany(models.song, {
    //         as: 'song',
    //         foreignKey: 'songId'
    //     });
    // }
    return album;
}