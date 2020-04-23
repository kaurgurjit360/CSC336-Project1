module.exports = (sequelize, Datatypes) => {
const song = sequelize.define("song", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        song_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        }
    });
    // song.associate = models => {
    //     song.belongsTo(models.Album, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }
    
    return song;
}