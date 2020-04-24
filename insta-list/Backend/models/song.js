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
             type: Datatypes.INTEGER,
            allowNull: false,
            unique: true
     },
     
     artistId: {
        type: Datatypes.INTEGER,
       allowNull: false,
       unique: true
}
    
    });
     song.associate = models => {
         song.belongsTo(models.album,{foreginKey:'albumId', unique: true, allowNull:false});
         song.belongsTo(models.artist,{foreginKey:'artistId', unique: true, allowNull: false});
        // song.hasMany(models.likeplaylist,{foreginKey:'songId', primaryKey: true});      
         song.hasMany(models.likesong,{foreginKey:'likedsongId', unique: true, allowNull: false});
         song.hasMany(models.genre,{foreginKey:'genreId', unique: true, allowNull :false});
     }
    
    return song;
}