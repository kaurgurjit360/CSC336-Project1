module.exports = (sequelize, Datatypes) => {
    const song_artist = sequelize.define("song_artist", {
        song_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        artist_id: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: true
        }, 

       

    });

     song_artist.associate =function(models) {
           song_artist.belongsTo(models.artist,{foreignKey: 'aritst_id'});
           song_artist.belongsTo(models.song,{foreignKey: 'song_id'});
            
        });
     }
    return song_artist;
}