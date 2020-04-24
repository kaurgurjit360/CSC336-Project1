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
        },
    //     albumId: {
    //         type: Datatypes.INTEGER

    // }
    
    });
    //  song.associate = models => {
    //      song.belongsTo(models.album,{foreginKey:'albumID', primaryKey: true});
    //      song.belongsTo(models.artist,{foreginKey:'artistID', primaryKey: true});
    //      song.hasMany(models.likeplaylist,{foreginKey:'songId', primaryKey: true});      
    //      song.hasMany(models.likesong,{foreginKey:'likedsongID'});
    //      song.hasMany(models.genre,{foreginKey:'genreID'});
    //  }
    
    return song;
}