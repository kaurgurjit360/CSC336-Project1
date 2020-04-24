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
     song.associate = models => {
         song.belongsTo(models.album,{foreginKey:'albumId', primaryKey: true});
         song.belongsTo(models.artist,{foreginKey:'artistId', primaryKey: true});
        // song.hasMany(models.likeplaylist,{foreginKey:'songId', primaryKey: true});      
         song.hasMany(models.likesong,{foreginKey:'likedsongId'});
         song.hasMany(models.genre,{foreginKey:'genreId'});
     }
    
    return song;
}