module.exports = (sequelize, Datatypes) => {
const song = sequelize.define("song", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: 'unique indexes'

        },
        song_name: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: false
        },
         albumId: {
             type: Datatypes.INTEGER,
            allowNull: false,
            unique: 'unique indexes'
     },

     artistId: {
        type: Datatypes.INTEGER,
       allowNull: false,
       unique: 'unique indexes'
}
    
    });
     song.associate = models => {
         song.belongsTo(models.album,{foreginKey:'albumId', unique: true, allowNull:false, onDelete:'cascade'});
         song.belongsTo(models.artist,{foreginKey:'artistId', unique: true, allowNull: false, onDelete:'cascade'});
        // song.hasMany(models.likeplaylist,{foreginKey:'songId', primaryKey: true});      
         song.hasMany(models.likesong,{foreginKey:'songId', unique: 'unique indexes', allowNull: false, onDelete:'cascade'});
         song.hasMany(models.genre,{foreginKey:'genreId', onDelete:'cascade'});
     }
    
    return song;
}