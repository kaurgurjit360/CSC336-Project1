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
        albumId: {
            type: Datatypes.INTEGER

    }
    
    });
     song.associate = models => {
         song.belongsTo(models.album,{foreginKey:'albumID'});
         song.belongsTo(models.artist,{foreginKey:'artistID'});
         song.belongsTo(models.playlist,{foreginKey:'playlistID'});
      
         song.hasMany(models.likesong,{foreginKey:'likedsongID'});
         song.hasMany(models.genre,{foreginKey:'genreID'});
     }
    
    return song;
}